// Run by Node.js
// 곱셈    

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
const cal = (a, b, c) => {
    if (b == 0) return BigInt(1);
    const val = cal(a, BigInt(parseInt(b / BigInt(2))), c);
    if (b % BigInt(2)) 
        return val * val % c * a % c;
    return val * val % c;
}
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    let [a, b, c] = input[0].split(' ').map(BigInt);

    console.log(Number(cal(a, b, c)));
	process.exit();
});