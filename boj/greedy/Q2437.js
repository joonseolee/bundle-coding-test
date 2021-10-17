// Run by Node.js
// 저울 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const weightList = input[1].split(' ')
        .map(v => Number(v))
        .sort((a, b) => b - a);

    let result = 1;
    while (true) {
        let sum = 0;

        for (let i = 0 ; i < weightList.length ; i++) {
            if (sum === result)
                break;
            const value = sum + Number(weightList[i]);
            if (value <= result) {
                sum = value;
            }
                
        }

        if (sum !== result)
            break;

        result++;
    }


    console.log(result);
	process.exit();
});