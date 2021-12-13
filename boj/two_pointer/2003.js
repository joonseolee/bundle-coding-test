// Run by Node.js
// 수들의 합 2 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const [numberLength, sumValue] = input[0].split(' ').map(Number);
    const numberList = input[1].split(' ').map(Number);

    let start = 0;
    let end = 0;
    let count = 0;

    while (end <= numberLength - 1) {
        let sum = numberList.reduce((acc, cur, index) => {
            if (index >= start && index <= end)
                return acc + cur;
            return acc;
        }, 0);

        if (sum === sumValue) {
            count++;
            start++;
        } else if (sum > sumValue) {
            start++;
        } else {
            end++;
        }
    } 
    
    console.log(count);
	process.exit();
});