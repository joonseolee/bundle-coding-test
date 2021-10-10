// Run by Node.js
// 가장 긴 증가하는 부분 수열 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const numberList = input[1].split(' ').map(v => Number(v));
    const dp = [];
    const subDp = [];

    numberList.forEach((element, index) => {
        if (index === 0) {
            dp.push(1);
            subDp.push(element);
            return;
        }
        
        let subDpIndex = -1;
        for (let j = 0 ; j < subDp.length ; j++) {
            if (subDp[j] >= element) {
                subDp[j] = element;
                subDpIndex = j;
                break;
            }
        }

        if (subDpIndex === -1) {
            subDp.push(element);
            subDpIndex = subDp.length - 1;
        }

        dp.push(subDpIndex + 1);
    });

    const result = dp.reduce((acc, cur) => acc > cur ? acc : cur, 0);
    console.log(result);
	process.exit();
});