// Run by Node.js
// 이진수 변환 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
let number = 0;
let result = '';

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const cal = jisu => {
        const item = Math.pow(2, jisu);
        if (item < number) {
            cal(jisu + 1);
        } else return;
        if (item > number)
            result += '0';
        else {
           result += '1'
           number -= item; 
        }
    }

    // better
    const solution = n => {
        let answer = '';
        const dfs = numberParam => {
            if (numberParam === 0) return;

            dfs(parseInt(numberParam / 2));
            answer += numberParam % 2;
        } 

        dfs(number);

        return answer;
    }
    
    number = Number(input[0]);
    // cal(0);
    // console.log(result);
    console.log(solution(number));
	process.exit();
});