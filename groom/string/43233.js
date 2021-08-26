// Run by Node.js
// 문자열 Palindrome 문제 풀이 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const lineLength = line.length;
	let prefixIndex = 0;
	let suffixIndex = lineLength - 1;
	let result = 'Palindrome';
	
	while (prefixIndex <= suffixIndex) {
		if (line[prefixIndex] !== line[suffixIndex]) {
			result = 'Not Palindrome';
			break;
		}
		prefixIndex++;
		suffixIndex--;
	};
	console.log(result);
	
	rl.close();
}).on("close", function() {
	process.exit();
});