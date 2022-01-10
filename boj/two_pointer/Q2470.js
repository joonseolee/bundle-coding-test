// Run by Node.js
// 두 용액 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const numberList = input[1].split(' ').map(Number).sort((a, b) => a - b);

    let lp = 0;
    let rp = numberList.length - 1;
    let minTarget = Infinity;
    let result = '';

    while (lp < rp) {
        const sumValue = numberList[lp] + numberList[rp];
        if (sumValue === 0) {
            result = `${numberList[lp]} ${numberList[rp]}`;
            break;
        }
        const recentMinTarget = Math.min(minTarget, Math.abs(sumValue));
        if (recentMinTarget !== minTarget) {
            minTarget = recentMinTarget;
            result = `${numberList[lp]} ${numberList[rp]}`;
        }
        if (sumValue < 0) lp++;
        else rp--;
    }

    console.log(result);
	process.exit();
});