// Run by Node.js
// 문자열 뒤집기 문제 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    const text = Array.from(line).reduce((acc, cur) => {
        acc.unshift(cur);
        return acc;
    }, []);

	console.log(text.join(''));
	rl.close();
}).on("close", function() {
	process.exit();
});