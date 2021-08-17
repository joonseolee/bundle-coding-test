// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const result = Array.from({ length: Number(line) }, (_, i) => i)
		.filter(v => v !== 0)
		.reduce((acc, cur) => {
		const matchedCount = Array.from(cur.toString())
			.map(v => Number(v))
            .filter(v => v !== 0)
			.filter(v => v % 3 === 0)
			.length;
            console.log('cur ->', cur);
            console.log('matchedCount ->', matchedCount);
		return acc + matchedCount
	}, 0);
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});