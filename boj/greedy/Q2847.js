// Run by Node.js
// 게임을 만든 동준이  

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const points = input.splice(1, input.length).map(v => Number(v)).reverse();

    let increaseCount = 0;
    let preValue = -1;
    points.forEach((it, index) => {
        if (preValue === -1) {
            preValue = it;
            return;
        }

        if (it < preValue) {
            preValue = it;
            return;
        }

        let increaseValue = it - preValue + 1;
        increaseCount += increaseValue;
        preValue = it - increaseValue;
    });

    console.log(increaseCount);
	process.exit();
});