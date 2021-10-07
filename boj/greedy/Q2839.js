// Run by Node.js
// 설탕배달 참고 https://dpsc615.tistory.com/83

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const big = 5;
const small = 3;

rl.on("line", function(line) {
    let sugar = Number(line);
    let bigMax = parseInt(sugar / big);

    while (bigMax >= 0) {
        let quotient = sugar - bigMax * big;
        if (quotient % small === 0) {
            console.log(bigMax + quotient / small);
            return;
        } else bigMax--;
    }

    console.log(-1);
	rl.close();
}).on("close", function() {
	process.exit();
});

// alternative
// let sugar = 55;
// let bags = 0;

// while(true) {
//     if (sugar % 5 === 0) {
//         console.log(sugar / 5 + bags);
//         break;
//     }
//     if (sugar <= 0) {
//         console.log(-1);
//         break;
//     }
//     sugar = sugar - 3;
//     bags++;
// }