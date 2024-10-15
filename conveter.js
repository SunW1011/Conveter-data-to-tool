// convertUserAgents.js
const fs = require('fs');

// Đọc danh sách User-Agent từ file userAgents.txt
fs.readFile('userAgents.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Lỗi đọc file:", err);
        return;
    }

    // Tách danh sách User-Agent thành mảng
    const userAgents = data.split('\n').map(agent => agent.trim()).filter(agent => agent);

    // Tạo file userAgents.js và viết danh sách User-Agent vào đó
    const output = "const userAgents = [\n" + userAgents.map(agent => `    "${agent}"`).join(',\n') + "\n];\n\nexport default userAgents;";

    fs.writeFile('userAgents.js', output, (err) => {
        if (err) {
            console.error("Lỗi ghi file:", err);
            return;
        }
        console.log("Đã chuyển đổi danh sách User-Agent sang userAgents.js thành công.");
    });
});
