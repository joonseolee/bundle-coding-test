// Run by Node.js
// 부분합 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const [numberListLength, sumValue] = input[0].split(' ').map(Number);
    const numberList = input[1].split(' ').map(Number);

    let start = 0;
    let end = 0;
    let minLength = Infinity;
    let sum = numberList[0];

    while (start <= end) {
        if (sumValue <= sum) {
            minLength = Math.min(minLength, end - start + 1);
            sum -= numberList[start++];
        } else {
            if (end + 1 === numberListLength)
                break;
            sum += numberList[++end];
        }
    }
    console.log(minLength === Infinity ? 0 : minLength);
	process.exit();
});