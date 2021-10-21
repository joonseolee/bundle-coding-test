// Run by Node.js
// 한수  

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const value = Number(input[0]);
    if (value < 100)
        console.log(value);
    else {
        let count = 99;
        for (let i = 100 ; i <= value ; i++) {
            const iArray = Array.from(String(i)).map(v => Number(v));
            if ((iArray[0] - iArray[1]) === (iArray[1] - iArray[2]))
                count++;
        }
        console.log(count);
    }
	process.exit();
});