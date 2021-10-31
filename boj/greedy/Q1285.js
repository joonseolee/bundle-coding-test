// Run by Node.js
// 동전 뒤집기 

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const size = input[0].split(' ').map(v => Number(v));
    const matrix = input.slice(1, input.length).reduce((acc, cur) => {
        acc.push(Array.from(cur).map(v => v === 'H'));
        return acc;
    }, []);

    const countList = [];

    for (let i = 0 ; i < size ; i++) {
        for (let j = 0 ; j < size ; j++) {
            const convertMatrixRow = matrix.map((row, rowIndex) => {
                if (rowIndex === i)
                    return row.map(value => !value);
                return row;
            });
            const convertMatrixResult = convertMatrixRow.map((row, index) => 
                row.map((value, valueIndex) => valueIndex === j ? !value : value));
            
            const count = convertMatrixResult.reduce((acc, cur) => {
                const trueLength = cur.filter(value => !value).length;
                return acc + trueLength;
            }, 0);

            countList.push(count);
        }
    }

    const minCount = countList.reduce((acc, cur) => acc > cur ? cur : acc, 100);
    console.log(minCount);
	process.exit();
});