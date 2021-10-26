// Run by Node.js
// N과 M

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
const result = [];
let isUsed = [];
let max, length = 0;
const func = k => {
    if (k === length) {
        console.log(result);
        return;
    }

    Array.from({ length: max }, (_, i) => i + 1)
        .forEach(index => {
            if (!isUsed[index]) {
                result[k] = index;
                isUsed[index] = 1;
                func(k + 1);
                isUsed[index] = 0;
            }
    })
}
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    [max, length] = input[0].split(' ').map(Number);
    isUsed = Array.from({ length: max }, _ => 0);
    
    func(0);
	process.exit();
});