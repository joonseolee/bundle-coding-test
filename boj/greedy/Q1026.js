// Run by Node.js
// 보물찾기

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let MAX_SIZE = 0;
let aList = [];
let bList = [];

rl.on("line", function(line) {
    if (MAX_SIZE === 0) {
        MAX_SIZE = Number(line);
        return;
    }
    if (aList.length === 0) {
        aList = line.split(' ').map(v => Number(v)).sort((a, b) => a - b);
        return;
    }
    bList = line.split(' ').map(v => Number(v));

    let sum = Array.from({ length: MAX_SIZE }, (_, i) => i)
        .reduce((acc, cur) => {
            let bMax = Math.max.apply(null, bList);
            acc += (aList[cur] * bMax);
            bList.splice(bList.indexOf(bMax), 1);
            return acc;
        }, 0);

    console.log(sum);
	rl.close();
}).on("close", function() {
	process.exit();
});