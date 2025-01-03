import os

# Bước 1: Đọc danh sách ID từ file id.txt
with open('id.txt', 'r', encoding='utf-8') as id_file:
    id_order = [line.strip() for line in id_file.readlines()]  # Danh sách ID theo thứ tự

# Bước 2: Đọc file input.txt và tìm kiếm ID
found_results = {}

with open('input.txt', 'r', encoding='utf-8') as input_file:
    lines = input_file.readlines()

    for line in lines:
        parts = line.split()
        if len(parts) >= 2:  # Đảm bảo có đủ phần tử
            name = " ".join(parts[:-1])  # Tên là tất cả các phần tử trừ phần tử cuối cùng
            url = parts[-1]  # URL là phần tử cuối cùng

            # Kiểm tra từng ID trong danh sách ID
            for id_part in id_order:  # Duyệt theo thứ tự trong id_order
                if id_part in url:  # Nếu ID nằm trong URL
                    found_results[id_part] = f"{name} - ID: {id_part}\n{url}\n"

# Bước 3: Sắp xếp kết quả theo thứ tự trong id_order
sorted_results = sorted(found_results.items(), key=lambda x: id_order.index(x[0]))

# Bước 4: Xuất kết quả vào file output3.txt
output_file_path = 'output3.txt'

with open(output_file_path, 'w', encoding='utf-8') as output_file:
    for index, (id_part, result) in enumerate(sorted_results):
        output_file.write(f"#{index}. {result}")

# In thông báo hoàn thành
print(f'Dã xử lý và lưu kết quả vào file: {output_file_path}')
