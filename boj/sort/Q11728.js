// Run by Node.js
// 배열합치기 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const aList = input[1].split(' ').map(Number);
    const bList = input[2].split(' ').map(Number);

    const result = [...aList, ...bList].sort((a, b) => a - b);

    console.log(result.join(' '));

	process.exit();
});