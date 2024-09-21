import os
import urllib.parse

# Đọc file chứa chuỗi đã mã hóa
file_path = os.path.join(os.path.dirname(__file__), 'output.txt')

with open(file_path, 'r', encoding='utf-8') as file:
    content = file.read()

# Tách các dòng trong file (mỗi dòng là một chuỗi đã mã hóa)
encoded_lines = [line.strip() for line in content.split('\n')]

# Kiểm tra từng dòng và giải mã nếu cần thiết
decoded_lines = []
for line in encoded_lines:
    # Nếu dòng chứa ký tự mã hóa (ví dụ '%'), ta sẽ giải mã nó
    if '%' in line:
        decoded_lines.append(urllib.parse.unquote(line))
    else:
        decoded_lines.append(line)  # Nếu không có ký tự mã hóa, giữ nguyên dòng

# Lưu lại kết quả vào một file mới
output_file_path = os.path.join(os.path.dirname(__file__), 'output2.txt')

with open(output_file_path, 'w', encoding='utf-8') as output_file:
    output_file.write('\n'.join(decoded_lines))

print(f'Đã giải mã và lưu các chuỗi vào file: {output_file_path}')
