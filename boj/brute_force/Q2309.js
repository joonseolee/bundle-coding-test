// Run by Node.js
// 일곱 난쟁이   

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const inputs = input.map(v => Number(v));
    const sum = inputs.reduce((acc, cur) => acc + cur, 0);

    let isClear = false;
    for (let i = 0 ; i < inputs.length ; i++) {
        for (let j = i ; j < inputs.length ; j++) {
            if (i === j)
                continue;
            if (sum - inputs[i] - inputs[j] === 100) {
                inputs
                    .filter((_, index) => i !== index && j !== index)
                    .sort((a, b) => a - b)
                    .forEach(it => console.log(it));
                isClear = true;
                break;
            }
        }
        if (isClear)
            break;
    } 

	process.exit();
});