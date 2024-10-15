import aiohttp
import asyncio

# Hàm lấy và định dạng proxy từ một URL
async def fetch_and_format_proxies(session, url):
    async with session.get(url) as response:
        getPROXY = await response.text()
        proxies = [
            f'http://{user}:{pass_}@{ip}:{port}\n'
            for proxy in getPROXY.splitlines()
            for ip, port, user, pass_ in [proxy.split(':')]
        ]
        # Nhân đôi mỗi dòng proxy
        return [proxy for proxy in proxies for _ in range(2)]

async def main():
    url = 'https://trumproxy.net/proxy/package_data?package_buy=1432&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
    async with aiohttp.ClientSession() as session:
        proxies = await fetch_and_format_proxies(session, url)
    
    # Đọc file hiện có và thay thế các dòng
    with open('proxy.txt', 'r') as file:
        lines = file.readlines()
    lines[:200] = proxies[:200]
    
    # Ghi lại vào file
    with open('proxyX2.txt', 'w') as file:
        file.writelines(lines)
    print("Các dòng từ 1 đến 200 đã được thay thế bằng proxy từ URL.")

asyncio.run(main())
