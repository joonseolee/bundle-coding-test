// Run by Node.js
// 별 찍기 - 10

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
    const matrix = Array.from({ length: triangleCount }, (_, i) => Array.from({ length: triangleCount }, (_) => ' '));

    const doLogic = (count, x, y) => {
        if (count === 3) {

            matrix[x][y] = '*';
            matrix[x][y + 1] = '*';
            matrix[x][y + 2] = '*';

            matrix[x + 1][y] = '*';
            matrix[x + 1][y + 2] = '*';

            matrix[x + 2][y] = '*';
            matrix[x + 2][y + 1] = '*';
            matrix[x + 2][y + 2] = '*';
            return;
        }

        const value = count / 3;

        doLogic(value, x, y);
        doLogic(value, x, y + value);
        doLogic(value, x, y + 2 * value);

        doLogic(value, x + value, y);

        doLogic(value, x + value, y + 2 * value);

        doLogic(value, x + value * 2,  y);
        doLogic(value, x + value * 2,  y + value);
        doLogic(value, x + value * 2,  y + 2 * value);
    }

    doLogic(triangleCount, 0, 0);
    matrix.forEach(v => console.log(v.join('')))
	process.exit();
});