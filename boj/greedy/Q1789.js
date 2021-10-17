// Run by Node.js
// 수들의 합 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const inputValue = Number(input[0]);
    let max = 0;
    let sum = 0;

    for (let i = 1 ; i <= inputValue ; i++) {
        sum = sum + i;
        max++;

        if (sum > inputValue) {
            max--;
            break;
        }
    }

    console.log(max);
	process.exit();
});