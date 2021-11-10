// Run by Node.js
// 별 찍기 - 19

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const rectangleCount = Number(input[0]);
    const rowLength = 4 * (rectangleCount  - 1) + 1;
    const matrix = Array.from({ length: rowLength }, (_) => Array.from({ length: rowLength }, (_) => ' '));

    const doLogic = (count, x, y) => {
        if (count === 1) {
            matrix[x][y] = '*';
            return;
        }

        const eachLegth = 4 * (count  - 1) + 1;
        
        for (let i = x ; i < x + eachLegth ; i++) {
            matrix[i][y] = '*';
            matrix[i][y + eachLegth - 1] = '*';
        }

        for (let j = y ; j < y + eachLegth ; j++) {
            matrix[x][j] = '*';
            matrix[x + eachLegth - 1][j] = '*';
        }
        
        doLogic(count - 1, x + 2, y + 2);
    }

    doLogic(rectangleCount, 0, 0);

    matrix.forEach(v => console.log(v.join('')))
	process.exit();
});