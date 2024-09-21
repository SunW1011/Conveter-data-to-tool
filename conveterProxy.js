const fs = require('fs');

fs.readFile('inputP.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const lines = data.split('\n').filter(line => line.trim()); // Loại bỏ dòng trống
    const formattedLines = lines.map(line => {
        const [ip, port, user, pass] = line.trim().split(':'); // Sử dụng trim() để loại bỏ ký tự trắng
        return `http://${user}:${pass}@${ip}:${port}`;
    });
    fs.writeFile('outputP.txt', formattedLines.join('\n'), 'utf8', (err) => {
        if (err) throw err;
        console.log('Đã xử lý xong!');
    });
});
