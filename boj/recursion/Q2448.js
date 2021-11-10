// Run by Node.js
// 별 찍기 - 11

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const triangleCount = Number(input[0]);
    const matrix = Array.from({ length: triangleCount }, (_, i) => Array.from({ length: triangleCount * 2 }, (_) => ' '));

    const doLogic = (count, x, y) => {
        if (count === 3) {
            matrix[x][y] = '*';

            matrix[x + 1][y - 1] = '*';
            matrix[x + 1][y + 1] = '*';

            matrix[x + 2][y - 2] = '*';        
            matrix[x + 2][y - 1] = '*';        
            matrix[x + 2][y] = '*';        
            matrix[x + 2][y + 1] = '*';        
            matrix[x + 2][y + 2] = '*';       
            return;
        }

        const value = count / 2;

        doLogic(value, x, y);
        doLogic(value, x + value, y - value);
        doLogic(value, x + value, y + value);
    }

    doLogic(triangleCount, 0, triangleCount - 1);
    matrix.forEach(v => console.log(v.join('')))
	process.exit();
});