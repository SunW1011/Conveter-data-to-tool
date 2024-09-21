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
        formatted_proxies_list.extend(formatted_proxies)
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

# Thay thế các dòng từ 1 đến 50 bằng proxy từ URL1
start1 = 0   # Dòng 1 tương ứng với chỉ số 1
end1 = 50   # Dòng 50 tương ứng với chỉ số 50
lines[start1:end1] = formatted_proxies1[:end1 - start1]

# Thay thế các dòng từ 51 đến 100 bằng proxy từ URL2
start2 = 50  # Dòng 51 tương ứng với chỉ số 51
end2 = 100   # Dòng 100 tương ứng với chỉ số 100
lines[start2:end2] = formatted_proxies2[:end2 - start2]

# Ghi lại nội dung đã chỉnh sửa vào file
with open('proxy.txt', 'w') as file:
    file.writelines(lines)

print("Các dòng từ 1 đến 50 đã được thay thế bằng proxy từ URL1.")
print("Các dòng từ 51 đến 100 đã được thay thế bằng proxy từ URL2.")
