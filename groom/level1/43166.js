// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const value = Array.from({ length: Number(line) + 1 }, (_, i) => i)
		.filter(v => v !== 0)
        .filter(v => (v % 3 === 0) || (v % 5 === 0))
		.reduce((acc, cur) => acc + cur, 0);
	console.log(value);
	rl.close();
}).on("close", function() {
	process.exit();
});