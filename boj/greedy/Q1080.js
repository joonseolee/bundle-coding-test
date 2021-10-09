// Run by Node.js
// 행렬 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];
const convertMatrix = (matrix, i, j) => {
    for (let ii = i ; ii < i + 3 ; ii++) {
        for (let jj = j ; jj < j + 3 ; jj++) {
            matrix[ii][jj] = !matrix[ii][jj];
        }
    }
}

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const [row, column] =  input[0].split(' ').map(v => Number(v));
    const arrayA = [];
    const arrayB = [];
    input.filter((_, i) => i !== 0).forEach((v, i) => {
        const item = Array.from(v).map(v => Number(v));
        if (i >= row) arrayB.push(item);
        else arrayA.push(item);
    });
    
    const isEqualVariables = Array.from({ length: row }, (_, i) => i).every(index => {
        const innerArrayA = arrayA[index];
        const innerArrayB = arrayB[index];
        return Array.from({ length: column }, (_, ii) => ii)
            .every(innerIndex => innerArrayA[innerIndex] === innerArrayB[innerIndex]);
    })

    if (isEqualVariables) {
        console.log(0);
        return;
    }

    if (row < 3 || column < 3) {
        console.log(-1);
        return;
    }

    const matrix = Array.from({ length: row }, (_, i) => i).map(index => {
        const innerA = arrayA[index];
        const innerB = arrayB[index];
        return Array.from({ length: column }, (_, ii) => ii)
            .map(innerIndex => innerA[innerIndex] === innerB[innerIndex]);
    });

    let count = 0;
    for (let i = 0 ; i <= row - 3 ; i++) {
        for (let j = 0 ; j <= column - 3 ; j++) {
            if (!matrix[i][j]) {
                count++;
                convertMatrix(matrix, i, j);
            }
        }
    } 

    const isSuccess = Array.from({ length: row }, (_, i) => i).every(index => {
        const innerMatrix = matrix[index];
        return Array.from({ length: column }, (_, ii) => ii)
            .every(innerIndex => innerMatrix[innerIndex]);
    });

    if (isSuccess) console.log(count);
    else console.log(-1);

	process.exit();
});