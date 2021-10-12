// Run by Node.js
// 가장 긴 증가하는 부분 수열 5

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
    const dpIndexList = [];

    numberList.forEach((element, index) => {
        if (element > dp[dp.length - 1]) {
            dp.push(element);
            dpIndexList.push(dp.length - 1);
        } else {
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
            dpIndexList.push(left);
        }
    });

    const resultList = [];
    let [maxValue, maxValueIndex] = dpIndexList.reduce((acc, cur, index) => acc[0] > cur ? acc : [cur, index], [0, 0])
    for (let i = numberList.length - 1 ; i > -1 ; i--) {
        if (maxValueIndex === i) {
            
            resultList.push(numberList[maxValueIndex])
            const memorizeMaxValueIndex = maxValueIndex;
            maxValue--;
            for (let j = i ; j > -1 ; j--) {
                if (dpIndexList[j] === maxValue && memorizeMaxValueIndex > j) {
                    maxValueIndex = j;
                    break;
                }
            }
        }
    }
    console.log(dp.length);
    console.log(resultList.sort((a, b) => a - b).join(' '));
	process.exit();
});