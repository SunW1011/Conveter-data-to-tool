import aiohttp
import asyncio
from datetime import datetime

# Thông tin API Key
apiProxy = 'https://trumproxy.net/proxy/package_data?package_buy=1432&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
test_url = 'http://example.com'  # URL để kiểm tra proxy
timeout_duration = 3  # Giảm thời gian timeout

# Hàm lấy proxy từ API
async def fetch_proxies(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            if response.status == 200:
                getPROXY = await response.text()
                return [f'https://{user}:{pass_}@{ip}:{port}\n' for proxy in getPROXY.splitlines() for ip, port, user, pass_ in [proxy.split(':')]]
            else:
                print(f"Lỗi khi lấy dữ liệu từ {url}: {response.status}")
                return []

# Hàm kiểm tra proxy live hay die
async def check_proxy(session, proxy):
    try:
        async with session.get(test_url, proxy=proxy, timeout=timeout_duration) as response:
            if response.status == 200:
                return True  # Proxy live
    except Exception:
        return False  # Proxy die

# Hàm kiểm tra các proxy theo batch
async def check_proxies_batch(proxies, batch_size=10):
    live_proxies = []
    die_proxies = []

    async with aiohttp.ClientSession() as session:
        for i in range(0, len(proxies), batch_size):
            batch = proxies[i:i+batch_size]
            tasks = [check_proxy(session, proxy) for proxy in batch]
            results = await asyncio.gather(*tasks)

            for proxy, is_live in zip(batch, results):
                if is_live:
                    live_proxies.append(proxy)
                else:
                    die_proxies.append(proxy)

    return live_proxies, die_proxies

# Hàm ghi proxy vào file
def write_proxies_to_file(proxies_to_write, skip_present):
    with open('proxy.txt', 'w') as file:
        if skip_present:
            file.write('skip\n')  # Ghi "skip" vào dòng 1
        file.writelines(proxies_to_write)  # Ghi các proxy vào proxy.txt

# Hàm ghi proxy die vào log.txt với ghi chú thời gian
def write_die_proxies_to_log(die_proxies):
    with open('log.txt', 'a') as log_file:  # Sử dụng 'a' để ghi nối tiếp vào file
        for proxy in die_proxies:
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')  # Lấy thời gian hiện tại
            log_file.write(f'{timestamp} - {proxy}')  # Ghi proxy die kèm thời gian

# Hàm xử lý chính
async def main():
    # Lấy proxy từ API
    formatted_proxies = await fetch_proxies(apiProxy)

    # Đọc proxy từ proxyQuang.txt
    with open('proxyQuang.txt', 'r') as file:
        abc_proxies = file.readlines()

    # Đọc và đếm số lượng dòng trong data.txt không bắt đầu bằng dấu #
    with open('data.txt', 'r') as file:
        user_lines = [line for line in file.readlines() if not line.strip().startswith('#')]
        user_count = len(user_lines)
    
    # In số dòng của cả 2 file
    print(f"Số dòng của data.txt không bắt đầu bằng '#': {user_count}")
    print(f"Số dòng của proxyQuang.txt: {len(abc_proxies)}")
    print(f"Số proxy từ API: {len(formatted_proxies)}")

    # Tạo danh sách tổng hợp proxy từ API và proxyQuang.txt
    total_proxies = formatted_proxies + abc_proxies

    # Kiểm tra dòng đầu tiên của proxy.txt
    try:
        with open('proxy.txt', 'r') as file:
            first_line = file.readline().strip()
            skip_present = 'skip' in first_line.lower()
    except FileNotFoundError:
        skip_present = False  # Nếu không có file, coi như không có chữ "skip"

    # Biến giữ kết quả proxy cần ghi vào proxy.txt
    proxies_to_write = []

    # Kiểm tra proxy live hay die và bù thêm nếu cần
    proxy_index = 0
    while len(proxies_to_write) < user_count and proxy_index < len(total_proxies):
        batch_size = min(10, user_count - len(proxies_to_write))  # Tối ưu số lượng proxy theo batch
        batch_proxies = total_proxies[proxy_index:proxy_index + batch_size]
        live_proxies, die_proxies = await check_proxies_batch(batch_proxies)
        
        proxies_to_write.extend(live_proxies)
        write_die_proxies_to_log(die_proxies)  # Ghi proxy die vào log.txt
        
        proxy_index += batch_size

    if len(proxies_to_write) < user_count:
        print(f"Không đủ proxy live để ghi vào proxy.txt. Yêu cầu {user_count}, chỉ có {len(proxies_to_write)}.")

    # Ghi proxy live vào file proxy.txt
    write_proxies_to_file(proxies_to_write, skip_present)

    print(f"Đã ghi proxy live vào proxy.txt và proxy die vào log.txt với số lượng proxy live: {len(proxies_to_write)}.")

# Chạy chương trình chính
asyncio.run(main())
