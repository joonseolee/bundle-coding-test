// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const num = Number(line);
	if (num === 0 || num === 1)
		return 0;
	if (num === 2)
		return 1;
	
	const result = Array.from({ length: num + 1}, (_, i) => i)
		.filter(v => v > 1)
		.reduce((acc, cur) => acc + cur - 1, 0);
	
	console.log(result)
	rl.close();
}).on("close", function() {
	process.exit();
});