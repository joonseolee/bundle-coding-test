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
    let count = 0;
    const answer = [];

    const hanoi = (n, from, other, to) => {
        if (!n) return;

        hanoi(n - 1, from, to, other);
        answer.push([from, to]);
        count++;

        hanoi(n - 1, other, from, to);
    }

    hanoi(number, 1, 2, 3);
    console.log(count);
    console.log(answer.map(i => i.join(' ')).join('\n'));
	process.exit();
});