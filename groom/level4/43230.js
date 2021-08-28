// Run by Node.js
// DP - 개구리2

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let count;
rl.on("line", function(line) {
	if (!count) {
		count = line;
		return;
	}
	
	const rocks = line.split(' ').map(rock => Number(rock));
	let result = 0;
	for (let index = rocks.length - 1 ; index > 0 ; index--) {
		const needPower = rocks[index] - rocks[index - 1];
		result = result > needPower ? result : needPower;
		result++;
	}
	
	if (result < rocks[0]) {
		result = rocks[0];
		result++;
	}
	
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});