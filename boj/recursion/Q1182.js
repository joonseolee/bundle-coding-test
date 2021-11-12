// Run by Node.js
// 부분수열의 합 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
let max, sumValue = 0;
let numberList = [];
const numberUsedList = [];
let isUsed = [];
let count = 0;

const func = k => {
    if (numberUsedList.length !== 0 
        && sumValue === numberUsedList.reduce((acc, cur) => acc + cur, 0)) {
        console.log(numberUsedList);
        count++;
    }
        
    if (k === max) return;

    Array.from({ length: max }, (_, i) => i)
        .forEach(index => {
            if (!isUsed[index]) {
                numberUsedList[k] = numberList[index];
                isUsed[index] = 1;
                func(k + 1);
                isUsed[index] = 0;
            }
    })
}
rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    [max, sumValue] = input[0].split(' ').map(Number);
    numberList = input[1].split(' ').map(Number);
    isUsed = Array.from({ length: max }, _ => 0);
    
    func(0);
    console.log(count);
	process.exit();
});