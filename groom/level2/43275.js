// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));

rl.on("line", function(line) {
    const [start, end] = line.split(" ").map(v => Number(v));
    const overlapList = range(start, end, 1).filter(v => {
        const totalSum = range(1, v - 1, 1)
        .filter(atom => v % atom === 0)
        .reduce((acc, cur) => acc + cur, 0);
        if (v === totalSum) return true;
        return false;
    });

    console.log(overlapList.join(" ") + " ");
	rl.close();
}).on("close", function() {
	process.exit();
});