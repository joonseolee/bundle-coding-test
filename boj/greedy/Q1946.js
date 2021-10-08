// Run by Node.js
// 신입사원 - 성공 x 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
	input.push(line);
    setTimeout(() => {
        rl.close();
    }, 1000);
}).on("close", function() {
    let totalCount = Number(input[0]);
    let index = 1;
    while (totalCount > 0) {
        const eachTestCount = Number(input[index]);
        let tests = input
            .filter((_, i) => i > index && i <= eachTestCount + index)
            .map(v => v.split(' ').map(num => Number(num)))
            .sort((a, b) => a[0] - b[0]);
        const passCount = tests.reduce((acc, cur, curIndex) => {
            if (acc === 0)
                return 1;
            if (cur[1] < tests[curIndex - 1][1])
                return acc + 1;
            return acc;
        }, 0);
        
        console.log(passCount);
        totalCount--;
        index = eachTestCount + index + 1;
    }
	process.exit();
});
