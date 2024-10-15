import aiohttp
import asyncio
from datetime import datetime  # Import datetime

# Thông tin API Key
apiProxy = 'https://trumproxy.net/proxy/package_data?package_buy=1432&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
test_url = 'http://example.com'  # URL để kiểm tra proxy

# Hàm lấy proxy từ API
async def fetch_proxies(url):
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            if response.status == 200:
                getPROXY = await response.text()
                return [f'http://{user}:{pass_}@{ip}:{port}\n' for proxy in getPROXY.splitlines() for ip, port, user, pass_ in [proxy.split(':')]]
            else:
                print(f"Lỗi khi lấy dữ liệu từ {url}: {response.status}")
                return []

# Hàm kiểm tra proxy live hay die
async def check_proxy(session, proxy):
    try:
        async with session.get(test_url, proxy=proxy, timeout=5) as response:
            if response.status == 200:
                return True  # Proxy live
    except Exception:
        return False  # Proxy die

# Hàm kiểm tra tất cả proxy
async def check_proxies(proxies):
    live_proxies = []
    die_proxies = []

    async with aiohttp.ClientSession() as session:
        tasks = []
        for proxy in proxies:
            tasks.append(check_proxy(session, proxy))

        results = await asyncio.gather(*tasks)

        for proxy, is_live in zip(proxies, results):
            if is_live:
                live_proxies.append(proxy)
            else:
                die_proxies.append(proxy)

    return live_proxies, die_proxies

# Hàm ghi proxy vào file
def write_proxies_to_file(formatted_proxies, skip_present):
    with open('proxy.txt', 'w') as file:
        if skip_present:
            file.write('skip\n')  # Ghi "skip" vào dòng 1
        doubled_proxies = formatted_proxies * 2  # Nhân đôi danh sách proxy
        file.writelines(doubled_proxies)  # Ghi proxy từ API (đã nhân đôi)

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

    # Kiểm tra dòng đầu tiên của proxy.txt
    try:
        with open('proxy.txt', 'r') as file:
            first_line = file.readline().strip()
            skip_present = 'skip' in first_line.lower()
    except FileNotFoundError:
        skip_present = False  # Nếu không có file, coi như không có chữ "skip"

    # Kiểm tra proxy live hay die
    live_proxies, die_proxies = await check_proxies(formatted_proxies)

    # Ghi proxy live (đã nhân đôi) vào file proxy.txt
    write_proxies_to_file(live_proxies, skip_present)

    # Ghi proxy die vào file log.txt với thời gian
    write_die_proxies_to_log(die_proxies)

    print("Đã ghi proxy live (đã nhân đôi) vào proxy.txt và proxy die vào log.txt.")

# Chạy chương trình chính
asyncio.run(main())
