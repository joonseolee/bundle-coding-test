// Run by Node.js
// 동전 0

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let COIN_COUNT = 0;
let TARGET_MONEY = 0;
let COINS = [];

rl.on("line", function(line) {
    if (COIN_COUNT === 0) {
        [COIN_COUNT, TARGET_MONEY] = line.split(' ').map(v => Number(v));
        return;
    }
    if (COIN_COUNT - 1 !== COINS.length) {
        COINS.push(Number(line));
        return;
    }
    COINS.push(Number(line));

    let count = 0;
    let sumMoney = 0;
    while (TARGET_MONEY > 0) {
        let filteredCoins = COINS.filter(v => TARGET_MONEY - sumMoney >= v);
        let coin = filteredCoins[filteredCoins.length - 1];
        let temp = parseInt(TARGET_MONEY / coin);
        TARGET_MONEY = TARGET_MONEY - temp * coin;
        count += temp;
    }

    console.log(count);
	rl.close();
}).on("close", function() {
	process.exit();
});