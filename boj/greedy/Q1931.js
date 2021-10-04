// Run by Node.js
// 회의실 배정

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let LIST_COUNT = 0;
let TIME_LIST = [];

const mergeSort = arr => {
    const merger = (iLeft, iRight) => {
        let mergedArr = [];
        let leftPoint = 0;
        let rightPoint = 0;

        while (iLeft.length > leftPoint && iRight.length > rightPoint) {
            if (iLeft[leftPoint][1] <= iRight[rightPoint][1]) {
                mergedArr.push(iLeft[leftPoint]);
                leftPoint++;
            } else {
                mergedArr.push(iRight[rightPoint]);
                rightPoint++;
            }
        }

        while (iLeft.length > leftPoint) {
            mergedArr.push(iLeft[leftPoint]);
            leftPoint++;
        }

        while (iRight.length > rightPoint) {
            mergedArr.push(iRight[rightPoint]);
            rightPoint++;
        }

        return mergedArr;
    }

    const splitter = iArr => {
        if (iArr.length <= 1)
            return iArr;
        
        const mid = parseInt(iArr.length / 2);
        const left = splitter(iArr.slice(0, mid));
        const right = splitter(iArr.slice(mid, iArr.length));

        return merger(left, right);
    }

    return splitter(arr);
}

rl.on("line", function(line) {
    if (LIST_COUNT === 0) {
        LIST_COUNT = Number(line);
        return;
    }
    if (LIST_COUNT - 1 !== TIME_LIST.length) {
        TIME_LIST.push(line.split(' ').map(v => Number(v)));
        return;
    }
    TIME_LIST.push(line.split(' ').map(v => Number(v)));
    TIME_LIST.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

    let maxCount = 0;
    let endTime = 0;

    TIME_LIST.forEach(([start, end]) => {
        if (start < endTime)
            return;
        maxCount++;
        endTime = end;
    });
    
    console.log(maxCount);
	rl.close();
}).on("close", function() {
	process.exit();
});