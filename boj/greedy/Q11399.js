// Run by Node.js
// ATM

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let PEOPLE_COUNT = 0;
let TIME_LIST = [];

rl.on("line", function(line) {
    if (PEOPLE_COUNT === 0) {
        PEOPLE_COUNT = Number(line);
        return;
    }
    TIME_LIST = line.split(' ').map(v => Number(v)).sort((a, b) => a - b);

    let list = [];
    TIME_LIST.reduce((acc, cur) =>  {
        acc += cur;
        list.push(acc);
        return acc;
    }, 0);
    const sum = list.reduce((acc, cur) => acc + cur, 0);
    
    console.log(sum);
	rl.close();
}).on("close", function() {
	process.exit();
});