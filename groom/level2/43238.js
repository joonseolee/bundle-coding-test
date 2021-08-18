// 소수 구하기 
// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const num = Number(line);
    const isPrime = Array.from({ length: num }, (_, i) => i)
        .filter(v => v > 1)
        .every(v => num % v !== 0);
    console.log(isPrime ? 'True' : 'False');
	rl.close();
}).on("close", function() {
	process.exit();
});