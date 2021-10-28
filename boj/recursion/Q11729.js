// Run by Node.js
// 3의 배수 
// 이 문제는 좀 이상해서 이상태에서 패스 

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