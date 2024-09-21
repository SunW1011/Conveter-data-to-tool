import requests
from concurrent.futures import ThreadPoolExecutor, as_completed
from colorama import init, Fore

# Khởi tạo colorama
init(autoreset=True)

# Thông tin đăng nhập và API Key
apiProxy1 = 'https://trumproxy.net/proxy/package_data?package_buy=899&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
apiProxy2 = 'https://trumproxy.net/proxy/package_data?package_buy=1042&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
username = 'sun22230'
password = 'SunW101101@'

# Hàm lấy và định dạng proxy từ một URL
def fetch_and_format_proxies(url):
    response = requests.get(url, auth=(username, password))
    if response.status_code == 200:
        getPROXY = response.text.splitlines()
        formatted_proxies = [
            f'http://{user}:{pass_}@{ip}:{port}'
            for proxy in getPROXY
            for ip, port, user, pass_ in [proxy.split(':')]
        ]
        return formatted_proxies
    else:
        print(f"Lỗi khi lấy dữ liệu từ {url}: {response.status_code}")
        return []

# Hàm kiểm tra proxy hoạt động
def check_proxy(proxy, index):
    try:
        response = requests.get('https://httpbin.org/ip', proxies={'http': proxy, 'https': proxy}, timeout=5)
        if response.status_code == 200:
            print(Fore.GREEN + f"Proxy {index} hoạt động: {proxy}")  # Thêm màu xanh lá cho thông báo hoạt động
            return (proxy, True)
    except:
        print(Fore.RED + f"Proxy {index} die: {proxy}")
        return (proxy, False)

# Lấy proxy từ hai URL
formatted_proxies1 = fetch_and_format_proxies(apiProxy1)
formatted_proxies2 = fetch_and_format_proxies(apiProxy2)

# Kết hợp tất cả proxy lại
all_proxies = formatted_proxies1 + formatted_proxies2
total_proxies = len(all_proxies)

live_proxies = []
die_proxies = []

# Sử dụng ThreadPoolExecutor để kiểm tra đa luồng
with ThreadPoolExecutor(max_workers=100) as executor:  # Tùy chỉnh số lượng luồng (workers)
    future_to_proxy = {executor.submit(check_proxy, proxy, index): proxy for index, proxy in enumerate(all_proxies, start=1)}
    
    for future in as_completed(future_to_proxy):
        proxy, status = future.result()
        if status:
            live_proxies.append(proxy + '\n')
        else:
            die_proxies.append(proxy + '\n')

# Ghi lại proxy live vào file
with open('proxy_live.txt', 'w') as live_file:
    live_file.writelines(live_proxies)

# In ra proxy die
if die_proxies:
    with open('proxy_die.txt', 'w') as die_file:
        die_file.writelines(die_proxies)


print("Đã lưu các proxy live vào file 'proxy_live.txt'.")
