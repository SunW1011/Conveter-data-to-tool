import aiohttp
import asyncio
from datetime import datetime

apiProxy = 'https://trumproxy.net/proxy/package_data?package_buy=1432&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
test_url = 'http://example.com'

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
                return True
    except Exception:
        return False

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

# Hàm nhân đôi proxy khi thiếu
def duplicate_proxies(live_proxies, total_lines):
    duplicated_proxies = live_proxies.copy()
    while len(duplicated_proxies) < total_lines:
        duplicated_proxies.extend(live_proxies[:total_lines - len(duplicated_proxies)])
    return duplicated_proxies[:total_lines]

# Hàm ghi proxy vào file
def write_proxies_to_file(final_proxies):
    with open('proxy.txt', 'w') as file:
        file.writelines(final_proxies)

# Hàm ghi proxy die vào log.txt
def write_die_proxies_to_log(die_proxies):
    with open('log.txt', 'w') as log_file:
        for proxy in die_proxies:
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            log_file.write(f'{timestamp} - {proxy}')

# Hàm xử lý chính
async def main():
    # Lấy proxy từ API
    formatted_proxies = await fetch_proxies(apiProxy)

    # Đọc proxy từ proxyQuang.txt
    with open('proxyQuang.txt', 'r') as file:
        abc_proxies = [line.strip() + '\n' for line in file.readlines()]

    # Đọc users.txt, bỏ qua các dòng bắt đầu bằng #
    with open('data.txt', 'r') as file:
        lines = file.readlines()
        users = [line for line in lines if not line.startswith('#')]

        # Kiểm tra dòng đầu tiên
        first_line = lines[0].strip()
        if first_line.startswith('#0'):
            total_lines = len(users) - 1  # Giảm đi 1 dòng
        else:
            total_lines = len(users)  # Tổng số dòng từ users.txt

    # Kiểm tra proxy live hay die
    live_proxies, die_proxies = await check_proxies(formatted_proxies)

    # Nhân đôi proxy nếu thiếu
    final_proxies = abc_proxies + live_proxies + duplicate_proxies(live_proxies, total_lines - len(live_proxies) - len(abc_proxies))

    # Ghi proxy live vào file proxy.txt
    write_proxies_to_file(final_proxies)

    # Ghi proxy die vào file log.txt
    write_die_proxies_to_log(die_proxies)

    print("Đã ghi proxy live vào proxy.txt và proxy die vào log.txt.")

# Chạy chương trình chính
asyncio.run(main())
