import aiohttp
import asyncio
from threading import Thread

async def fetch_proxies_from_api(api_url):
    async with aiohttp.ClientSession() as session:
        async with session.get(api_url) as response:
            if response.status == 200:
                proxies = await response.text()
                return proxies.strip().splitlines()
            else:
                print(f"Failed to fetch proxies: {response.status}")
                return []

def convert_proxy_format(proxy_list):
    socks5_proxies = []
    for proxy in proxy_list:
        try:
            ip, port, user, password = proxy.split(":")
            formatted_proxy = f"socks5://{ip}:{port}@{user}:{password}"
            socks5_proxies.append(formatted_proxy)
        except ValueError:
            print(f"Invalid format: {proxy}")
    return socks5_proxies

def save_to_file(file_path, proxies):
    def write_file():
        try:
            with open(file_path, "w") as file:
                file.write("\n".join(proxies))
            print(f"Proxies saved to {file_path}")
        except IOError as e:
            print(f"Error writing to file: {e}")

    thread = Thread(target=write_file)
    thread.start()
    thread.join()

async def main():
    api_url = "https://trumproxy.net/proxy/package_data?package_buy=3061&api_key=OHuuKfRG1RDYSYOUns33HjuB2"
    output_file = "C:/Users/VXN/Desktop/socks5.txt"

    proxy_list = await fetch_proxies_from_api(api_url)
    converted_proxies = convert_proxy_format(proxy_list)
    save_to_file(output_file, converted_proxies)

# Chạy mã
asyncio.run(main())
