// Run by Node.js
// 별 찍기 - 17

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
    setTimeout(() => {
        rl.close();
    }, 3000)
}).on("close", function() {
    const triangleCount = Number(input[0]);
    const matrix = Array.from({ length: triangleCount }, (_, i) => Array.from({ length: triangleCount + i }, () => ' '));

    const doLogic = (x, y) => {
        if (x < 0) return;

        const leftYIndex = triangleCount * 2 - 2 - y;
        matrix[x][leftYIndex] = '*';
        matrix[x][y] = '*';
        if (x === triangleCount - 1) {
            for (let j = 0 ; j < triangleCount * 2 - 1 ; j++)
                matrix[x][j] = '*';
        }

        doLogic(x - 1, y - 1);
    }

    doLogic(triangleCount - 1, triangleCount * 2 - 2);

    matrix.forEach(v => console.log(v.join('')));
	process.exit();
});