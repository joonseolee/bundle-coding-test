// Run by Node.js
// DP - 특정 구간의 합 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let count;
let numberList;

rl.on("line", function(line) {
	if (!count) {
		count = Number(line);
		return;
	}
	if (!numberList) {
		numberList = line.split(' ').map(v => Number(v));
		return;
	}
	
	const [startIndex, endIndex] = line.split(' ').map(v => Number(v) - 1);
	const resultValue = numberList
		.filter((num, index) => index >= startIndex && index <= endIndex)
		.reduce((acc, cur) => acc + cur, 0);
	
	console.log(resultValue);
	rl.close();
}).on("close", function() {
	process.exit();
});