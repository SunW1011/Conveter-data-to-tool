import aiohttp
import asyncio

# Thông tin API Key
apiProxy = 'https://trumproxy.net/proxy/package_data?package_buy=1432&api_key=OHuuKfRG1RDYSYOUns33HjuB2'

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

# Hàm ghi proxy vào file
def write_proxies_to_file(formatted_proxies, abc_proxies, skip_present):
    with open('proxy.txt', 'w') as file:
        if skip_present:
            file.write('skip\n')  # Ghi "skip" vào dòng 1
            file.writelines(formatted_proxies)  # Ghi proxy từ API vào dòng 2 trở đi
        else:
            file.writelines(formatted_proxies)  # Ghi proxy từ API vào dòng 1
        file.writelines(abc_proxies)  # Ghi proxy từ proxyQuang.txt vào sau

# Hàm xử lý chính
async def main():
    # Lấy proxy từ API
    formatted_proxies = await fetch_proxies(apiProxy)

    # Đọc proxy từ proxyQuang.txt
    with open('proxyQuang.txt', 'r') as file:
        abc_proxies = file.readlines()

    # Kiểm tra dòng đầu tiên của proxy.txt
    try:
        with open('proxy.txt', 'r') as file:
            first_line = file.readline().strip()
            skip_present = 'skip' in first_line.lower()
    except FileNotFoundError:
        skip_present = False  # Nếu không có file, coi như không có chữ "skip"

    # Ghi proxy vào file
    write_proxies_to_file(formatted_proxies, abc_proxies, skip_present)
    print("Đã ghi proxy vào proxy.txt.")

# Chạy chương trình chính
asyncio.run(main())
