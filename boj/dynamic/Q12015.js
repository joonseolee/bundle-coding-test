// Run by Node.js
// 가장 긴 증가하는 부분 수열 2

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

    numberList.forEach(element => {
        if (element > dp[dp.length - 1])
            dp.push(element);
        else {
            let left = 0;
            let right = dp.length - 1;
            while (left < right) {
                let mid = parseInt((left + right) / 2);

                if (dp[mid] === element) {
                    left = mid;
                    break;
                } else if (dp[mid] > element) right = mid;
                else left = mid + 1;
            }
            dp[left] = element;
        }
    });

    console.log(dp.length);
	process.exit();
});