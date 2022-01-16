// Run by Node.js
// 두 수의 합 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const listLength = Number(input[0]);
    const numberList = input[1].split(' ').map(Number).sort((a, b) => a - b);
    const targetValue = Number(input[2]);

    let left = 0;
    let right = listLength - 1;
    let sum = numberList[left] + numberList[right];
    let count = 0;

    while (left <= right) {
        if (left === listLength || right === listLength)
            break;
        
        if (sum < targetValue) {
            sum -= numberList[left++];
            sum += numberList[left];
        } else if (sum > targetValue) {
            sum -= numberList[right--];
            sum += numberList[right];
        } else {
            if (left !== right)
                count++;
            sum -= numberList[right--];
            sum += numberList[right];
        }
    }

    console.log(count);
	process.exit();
});