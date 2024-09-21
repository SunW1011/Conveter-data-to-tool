import requests
import threading

# Thông tin API Key
apiProxy1 = 'https://trumproxy.net/proxy/package_data?package_buy=899&api_key=OHuuKfRG1RDYSYOUns33HjuB2'
apiProxy2 = 'https://trumproxy.net/proxy/package_data?package_buy=1042&api_key=OHuuKfRG1RDYSYOUns33HjuB2'

# Sử dụng session để tái sử dụng kết nối
session = requests.Session()

# Hàm lấy và định dạng proxy từ một URL
def fetch_and_format_proxies(url, formatted_proxies_list):
    response = session.get(url)
    if response.status_code == 200:
        getPROXY = response.text.splitlines()
        formatted_proxies = [
            f'http://{user}:{pass_}@{ip}:{port}\n'
            for proxy in getPROXY
            for ip, port, user, pass_ in [proxy.split(':')]
        ]
        # Nhân đôi mỗi dòng proxy
        doubled_proxies = [proxy for proxy in formatted_proxies for _ in range(2)]
        formatted_proxies_list.extend(doubled_proxies)
    else:
        print(f"Lỗi khi lấy dữ liệu từ {url}: {response.status_code}")

# Danh sách lưu proxy từ mỗi URL
formatted_proxies1 = []
formatted_proxies2 = []

# Tạo các luồng để lấy proxy song song
thread1 = threading.Thread(target=fetch_and_format_proxies, args=(apiProxy1, formatted_proxies1))
thread2 = threading.Thread(target=fetch_and_format_proxies, args=(apiProxy2, formatted_proxies2))

# Bắt đầu các luồng
thread1.start()
thread2.start()

# Chờ cả hai luồng kết thúc
thread1.join()
thread2.join()

# Đọc nội dung file hiện có
with open('proxy.txt', 'r') as file:
    lines = file.readlines()

# Thay thế các dòng từ 1 đến 100 bằng proxy từ URL1 (sau khi nhân đôi)
start1 = 0   # Dòng 1 tương ứng với chỉ số 1
end1 = 100   # Dòng 100 tương ứng với chỉ số 100
lines[start1:end1] = formatted_proxies1[:end1 - start1]

# Thay thế các dòng từ 101 đến 200 bằng proxy từ URL2 (sau khi nhân đôi)
start2 = 100  # Dòng 101 tương ứng với chỉ số 101
end2 = 200   # Dòng 200 tương ứng với chỉ số 200
lines[start2:end2] = formatted_proxies2[:end2 - start2]

# Ghi lại nội dung đã chỉnh sửa vào file
with open('proxyX2.txt', 'w') as file:
    file.writelines(lines)

print("Các dòng từ 1 đến 100 đã được thay thế bằng proxy từ URL1.")
print("Các dòng từ 101 đến 200 đã được thay thế bằng proxy từ URL2.")
