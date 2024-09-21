const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

// Đường dẫn đến file input và output
const inputFilePath = path.join(__dirname, 'data.txt');
const outputFilePath = path.join(__dirname, 'kq.txt');

// Đọc dữ liệu từ file
const inputData = fs.readFileSync(inputFilePath, 'utf8');

// Xử lý từng dòng, loại bỏ dòng trống và dòng bắt đầu bằng dấu #
const userLines = inputData
    .split('\n')
    .map(line => line.trim()) // Loại bỏ khoảng trắng ở đầu và cuối mỗi dòng
    .filter(line => line && !line.startsWith('#')); // Loại bỏ dòng rỗng và dòng bắt đầu bằng #

const outputData = [];

// Phân tích từng dòng và trích xuất userId và username
for (const line of userLines) {
    const params = querystring.parse(line);

    if (params.user) {
        try {
            const user = JSON.parse(decodeURIComponent(params.user));
            const userId = user.id;
            const username = user.username;

            if (userId && username) {
                outputData.push(`${userId}|${username}`);
            }
        } catch (error) {
            console.error('Lỗi khi phân tích JSON:', error);
        }
    }
}

// Ghi dữ liệu ra file output
fs.writeFileSync(outputFilePath, outputData.join('\n'), 'utf8');

console.log('Hoàn thành! Dữ liệu đã được lưu vào file kq.txt');
