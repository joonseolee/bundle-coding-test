// Run by Node.js
// 하노이의 탑 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let number = Number(input[0]);
    let result = '';

    const hanoi = (n, from, other, to) => {
        if (!n) return;

        hanoi(n - 1, from, to, other);
        result += from + ' ' + to + '\n';

        hanoi(n - 1, other, from, to);
    }

    const count = String(BigInt((BigInt((BigInt(1) << BigInt(number))) - BigInt(1))));
    console.log(count.slice(0, count.length));
    if (number <= 20) {
        hanoi(number, 1, 2, 3);
        console.log(result);
    }
	process.exit();
});