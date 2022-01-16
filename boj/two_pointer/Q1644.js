// Run by Node.js
// 소수의 연속합

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
const generatePrime = (value) => {

    const primes = [];
    const check = new Array(value + 1).fill(true);
    for (let i = 2; i * i <= value; i++) {
        if (!check[i]) continue;
        for (let j = i * i; j <= value; j += i) {
            check[j] = false;
        }
    }
    for (let i = 2; i <= value; i++) {
        if (check[i]) primes.push(i);
    }
    return primes;
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const target = Number(input[0]);
    const primeList = generatePrime(target);

    let left = 0;
    let right = 0;
    let sum = primeList[0];
    let count = 0;

    while (left <= right) {
        if (left === primeList.length || right === primeList.length) break;

        if (sum < target) {
            sum += primeList[++right];
        } else if (sum > target) {
            sum -= primeList[left++];
        } else {
            count++;
            sum -= primeList[left++];
        }
    }

    console.log(count);
	process.exit();
});