// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const num = Number(line);
	if (num % 2 === 0)
		console.log('even')
	else console.log('odd')
	rl.close();
}).on("close", function() {
	process.exit();
});