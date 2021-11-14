// Run by Node.js
// 괄호의 값 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
    setTimeout(() => {
        rl.close();
    }, 3000)
}).on("close", function() {
    const TWO = '()';
    const THREE = '[]';
    const splitedList = Array.from(input[0]);

    const call = (leftIndex, rightIndex) => {
        const isNumber = splitedList.every(v => !isNaN(v));
        if (isNumber) {
            const sum = splitedList.reduce((acc, cur) => acc + cur, 0);
            console.log(sum);
            process.exit();
        }

        // (, [ 가 연속으로 진행될경우 leftIndex 초기화 
        if (splitedList[rightIndex] === '(' || splitedList[rightIndex] === '[')
            call(rightIndex, rightIndex + 1);

        // 괄호사이에 숫자가 껴있을경우 rightIndex + 1
        if (!isNaN(splitedList[rightIndex]))
            call(leftIndex, rightIndex + 1);

        const numberWord = splitedList[leftIndex] + splitedList[rightIndex];
        const number = numberWord === THREE ? 3 : numberWord === TWO ? 2 : -1;

        if (number === -1) {
            console.log(0);
            process.exit();
        }

        if (leftIndex + 1 !== rightIndex) {
            let removedCount = 0;
            const innerNumber = splitedList
                .filter((_, i) => i > leftIndex && i < rightIndex)
                .reduce((acc, cur) => {
                    removedCount++;
                    return acc + cur;
                }, 0);
            const replaceNumber = innerNumber * number;
            splitedList.splice(leftIndex + 1, removedCount + 1);
            splitedList[leftIndex] = replaceNumber;
        } else {
            splitedList.splice(rightIndex, 1);
            splitedList[leftIndex] = number;
        }

        call(0, 1);
    }

    call(0, 1);
	process.exit();
});