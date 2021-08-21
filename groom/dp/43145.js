// Run by Node.js
// 길찾기 다이아몬드

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let MAX_WIDTH = 0;
let LOOP_COUNT = 1;
let mulitpleArray = [];

rl.on("line", function(line) {
    if (MAX_WIDTH === 0) {
        MAX_WIDTH = Number(line);
        return;
    }
    if (LOOP_COUNT !== MAX_WIDTH * 2 - 1) {
        mulitpleArray[LOOP_COUNT - 1] = [...line.split(' ').map(v => Number(v))];
        LOOP_COUNT++;
        return;
    }
    mulitpleArray[LOOP_COUNT - 1] = [...line.split(' ').map(v => Number(v))];
    let beforeMaxList = Array(MAX_WIDTH).fill(0);
    beforeMaxList[0] = mulitpleArray[0][0];
    let afterMaxList = Array(MAX_WIDTH).fill(0);
    afterMaxList[0] = mulitpleArray[0][0];



    for (let i = 1; i < LOOP_COUNT; i++) {
        for (let j = 0; j < mulitpleArray[i].length ; j++) {
            if (j === 0)
                beforeMaxList = [...afterMaxList];
            // 중간라인 이전일때 
            if (i < MAX_WIDTH) {
                // 처음
                if (j === 0) {
                    afterMaxList[j] = beforeMaxList[j] + mulitpleArray[i][j];
                    continue;
                }
                // 마지막
                if (j === mulitpleArray[i].length - 1) {
                    afterMaxList[j] = beforeMaxList[j - 1] + mulitpleArray[i][j];
                    continue;
                }
            }
            const directionIndex = j + (i < MAX_WIDTH ? -1 : +1);
            const valueA = beforeMaxList[j];
            const valueB = beforeMaxList[directionIndex] ? beforeMaxList[directionIndex] : 0;
            afterMaxList[j] = mulitpleArray[i][j] + (valueA > valueB ? valueA : valueB);
        }
    }

    console.log(afterMaxList.reduce((acc, cur) => acc > cur ? acc : cur, 0));
	rl.close();
}).on("close", function() {
	process.exit();
});