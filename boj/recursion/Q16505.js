// Run by Node.js
// 별

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const triangleCount = Math.pow(2, Number(input[0]));
    const matrix = Array.from({ length: triangleCount }, (_, i) => Array.from({ length: triangleCount - i }, (_) => ' '));

    const doLogic = (count, x, y) => {
        if (count === 1) {
            matrix[x][y] = '*';
            return;
        }

        const value = parseInt(count / 2);

        doLogic(value, x, y);
        doLogic(value, x + value, y);
        doLogic(value, x, y + value);
    }

    doLogic(triangleCount, 0, 0);

    matrix.forEach(v => console.log(v.join('')));
	process.exit();
});