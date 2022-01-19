// Run by Node.js
// 수 찾기 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const array = new Set(input[1].split(' '));
    const result = input[3].split(' ').map(it => array.has(it) ? 1 : 0);
    console.log(result.join('\n'));
    
	process.exit();
});