// Run by Node.js
// 3의 배수 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let number = Number(input[0]);

    const cal = (count) => {
        if (String(number).length < 2) {
            console.log(count);
            console.log(number % 3 === 0 ? 'YES' : 'NO');
            return;
        }

        number = Array.from(String(number))
            .map(v => Number(v))
            .reduce((acc, cur) => acc + parseInt(cur), 0);

        cal(count + 1);
    }

    cal(0);
	process.exit();
});