// Run by Node.js
// 전자레인지 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const buttonTimeList = [300, 60, 10];

rl.on("line", function(line) {
    let needTime = Number(line);
    let countList = [0, 0, 0];

    if (needTime % 10 !== 0) {
        console.log(-1);
        rl.close();
        return;
    }
    buttonTimeList.forEach((aTime, index) => {
        if (needTime === 0)
            return;
        countList[index] = parseInt(needTime / aTime);
        needTime = needTime % aTime;
    });

    console.log(countList.join(' '));
	rl.close();
}).on("close", function() {
	process.exit();
});