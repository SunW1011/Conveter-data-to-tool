import os

# Bước 1: Đọc file id.txt và tạo danh sách ID theo thứ tự từ file
with open('id.txt', 'r', encoding='utf-8') as id_file:
    id_order = [line.strip() for line in id_file.readlines()]
    id_set = set(id_order)  # Tạo tập hợp các ID để kiểm tra

# Bước 2: Đọc file input.txt và xử lý từng dòng
with open('input.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()

# Tạo từ điển để lưu kết quả, đảm bảo trùng ID thì chỉ lấy cái sau cùng
id_dict = {}
duplicate_ids = set()  # Tập hợp để lưu ID trùng lặp

# Bước 3: Xử lý từng dòng của input.txt
for line in lines:
    parts = line.split()

    # Kiểm tra nếu dòng có đủ phần tử (ít nhất 3 phần tử: tên, id, url)
    if len(parts) >= 3:
        # Tên có thể có từ 1 đến 5 phần tử, id là phần tử tiếp theo, URL là phần tử cuối cùng
        name_parts = parts[:-2]
        name = " ".join(name_parts)
        id_part = parts[-2]
        url = parts[-1]

        # Nếu ID đã tồn tại, đánh dấu là trùng lặp
        if id_part in id_dict:
            duplicate_ids.add(id_part)
        
        # Lưu kết quả vào từ điển, nếu trùng ID thì sẽ ghi đè kết quả trước đó
        id_dict[id_part] = f"{name} - ID: {id_part}\n{url}\n"

        # Xóa ID khỏi tập hợp nếu nó đã được tìm thấy
        id_set.discard(id_part)

# Bước 4: Sắp xếp kết quả dựa trên file id.txt
sorted_results = sorted(id_dict.items(), key=lambda x: id_order.index(x[0]) if x[0] in id_order else len(id_order))

# Bước 5: Ghi kết quả đã sắp xếp vào file output3.txt với thứ tự đánh số từ #0
output_file_path = os.path.join(os.path.dirname(__file__), 'output3.txt')

with open(output_file_path, 'w', encoding='utf-8') as output_file:
    for index, (id_part, result) in enumerate(sorted_results, start=0):
        output_file.write(f"#{index}. {result}")

# In tên và ID bị trùng ra terminal
if duplicate_ids:
    print("Các ID bị trùng:")
    for dup_id in duplicate_ids:
        name = id_dict[dup_id].split('\n')[0]  # Lấy tên từ kết quả
        print(f"ID: {dup_id} - Tên: {name}")

# In các ID bị thiếu từ id.txt
missing_ids = id_set - set(id_dict.keys())  # Tìm ID từ id_set nhưng không có trong id_dict
if missing_ids:
    print("Các ID bị thiếu trong input.txt:")
    for missing_id in missing_ids:
        print(missing_id)

# In thông báo hoàn thành
print(f'Đã xử lý và lưu kết quả vào file: {output_file_path}')
