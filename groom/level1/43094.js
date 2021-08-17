// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const printGrade = (sum) => {
	if (sum >= 90) return 'A';
	else if (sum >= 80) return 'B';
	else if (sum >= 70) return 'C';
	else if (sum >= 60) return 'D';
	else return 'F';
}

const TOTAL_SUBJECTS_COUNT = 3;

rl.on("line", function(line) {
	const sum = line.split(' ')
		.map((value) => Number(value))
		.reduce((acc, cur) => acc + cur, 0) / TOTAL_SUBJECTS_COUNT;
	const averga = (Math.round(sum * 100) / 100).toFixed(2);
	
	console.log(`${averga} ${printGrade(averga)}`)
	rl.close();
}).on("close", function() {
	process.exit();
});