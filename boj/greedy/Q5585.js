// Run by Node.js
// 거스름돈 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let havingMoney = 1000;
let changeList = [500, 100, 50, 10, 5, 1];

rl.on("line", function(line) {
    let price = Number(line);
    let needChangeAmount = havingMoney - price;
    let count = 0;

    changeList.forEach(change => {
        if (needChangeAmount === 0)
            return;
        count += parseInt(needChangeAmount / change);
        needChangeAmount = needChangeAmount % change;
    });

    console.log(count);
	rl.close();
}).on("close", function() {
	process.exit();
});