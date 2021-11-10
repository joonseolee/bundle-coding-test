// Run by Node.js
// 별 찍기 - 12

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const starCount = Number(input[0]);
    const matrix = Array.from({ length: starCount * 2 - 1 }, (_, i) => Array.from({ length: starCount }, (_) => ' '));

    const doLogic = (x, y) => {
        if (x === starCount * 2 - 1) return;

        if (x < starCount) {
            for (let j = y ; j < starCount ; j++) {
                matrix[x][j] = '*';
            }
    
            doLogic(x + 1, y - 1);
        } else {
            if (x === starCount)
                y = 1;
            for (let j = y ; j < starCount ; j++) {
                matrix[x][j] = '*';
            }
    
            doLogic(x + 1, y + 1);
        }
        
    }

    doLogic(0, starCount - 1);
    matrix.forEach(v => console.log(v.join('')))
	process.exit();
});