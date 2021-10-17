// Run by Node.js
// A -> B

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let [start, end] = input[0].split(' ').map(v => Number(v));
    let count = 0;

    while (start < end) {
        count++;
        let endString = Array.from(end + '');
        if (endString[endString.length - 1] === '1') {
            end = Number(endString.splice(0, endString.length - 1).join(''));
        } else {
            end = end / 2;
        }
    }

    if (start !== end) console.log(-1);
    else console.log(count + 1);
	process.exit();
});