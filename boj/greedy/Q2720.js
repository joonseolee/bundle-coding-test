// Run by Node.js
// 세탁소 사장 동혁  

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
const changes = [25, 10, 5, 1];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    input.splice(1, input.length)
        .map(it => {
            let money = Number(it);
            return changes.reduce((acc, cur) => {
                if (money === 0)
                    return acc + "0";
                const quotient = parseInt(money / cur);
                money = money % cur;
                return acc + quotient;
            }, '');
        })
        .forEach(v => console.log(Array.from(v).join(' ')));
	process.exit();
});