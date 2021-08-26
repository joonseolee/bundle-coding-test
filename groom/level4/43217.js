// Run by Node.js
// 공백 갯수 세기 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let dataLength = '';
rl.on("line", function(line) {
	if (!dataLength) {
		dataLength = line;
		return;
	}
	const characters = Array.from(line);
	const map = new Map();
	const spaceCharCode = 32;
	
	for (const value of characters) {
		const charCode = value.charCodeAt();
		if (!map.get(charCode)) map.set(charCode, 1);
		else map.set(charCode, map.get(charCode) + 1);
	}
	
	console.log(!map.get(spaceCharCode) ? 0 : map.get(spaceCharCode));
	rl.close();
}).on("close", function() {
	process.exit();
});