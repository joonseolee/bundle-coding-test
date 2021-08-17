// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

rl.on("line", function(line) {
	const number = Number(line);
	console.log(range(1, number, 1).filter(value => number % value === 0).join(' ') + " ")
	rl.close();
}).on("close", function() {
	process.exit();
});