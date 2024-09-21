with open('input.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()

# Mở (hoặc tạo mới) file output.txt để ghi kết quả
with open('output.txt', 'w', encoding='utf-8') as output_file:
    # Xử lý từng dòng trong file
    for i, line in enumerate(lines, start=1):
        # Tách dòng thành các phần tử
        parts = line.split()

        # Kiểm tra nếu parts có đủ phần tử (ít nhất 3 phần tử: tên, id, url)
        if len(parts) >= 3:
            # Tên có thể có từ 1 đến 5 phần tử, id là phần tử tiếp theo, URL là phần tử cuối cùng
            name_parts = parts[:-2]  # Lấy tất cả các phần tử trừ id và url
            name = " ".join(name_parts)  # Gộp các phần tử thành tên
            id_part = parts[-2]  # Phần tử áp chót là id
            url = parts[-1]  # Phần tử cuối là url

            # Tìm vị trí bắt đầu của query_id% và kết thúc trước &tgWebAppVersion
            start_index = url.find("query_id%")
            end_index = url.find("&tgWebAppVersion")

            # Trích xuất chuỗi mong muốn
            if start_index != -1 and end_index != -1:
                query_id_part = url[start_index:end_index]

                # Ghi kết quả vào file output.txt, không có khoảng cách khi xuống dòng
                output_file.write(f"#{i}. {name} - ID: {id_part}\n{query_id_part}\n")

        else:
            print(f"Dòng {i} không có đủ phần tử, bỏ qua.")

# In thông báo hoàn thành
print("Kết quả đã được ghi vào file output.txt")
