// Run by Node.js
// N-Queen

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
let list = [];
let row = 0;
let count = 0;

const isPossible = col => {
    for (let i = 0 ; i < col ; i++) {
        if (list[col] === list[i])
            return false;
        if (Math.abs(col - i) === Math.abs(list[col] - list[i]))
            return false;
    }
    return true;
}

const nQueen = depth => {
    if (depth === row) {
        count++;
        return;
    }

    for (let i = 0 ; i < row ; i++) {
        list[depth] = i;
        if (isPossible(depth))
            nQueen(depth + 1);
    }
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    row = Number(input[0]);
    list = Array.from({ length: row }, _ => 0);
    
    nQueen(0);
    
    console.log(count);
	process.exit();
});