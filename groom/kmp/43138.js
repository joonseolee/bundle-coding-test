// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

let LOOP_COUNT = 0;
let text = ''; 

const generateTable = (keyword) => {
    const keywordLength = keyword.length;
    const table = Array.from({ length: keywordLength }, (_) => 0);
    let j = 0;

    Array.from({ length: keywordLength }, (_, i) => i).filter(v => v !== 0).forEach(index => {
        if (j > 0 && keyword[index] !== keyword[j])
            j = table[j - 1];
        if (keyword[index] === keyword[j]) {
            j += 1;
            table[index] = j;
        }
    });

    return table;
};


rl.on("line", function(line) {
    if (LOOP_COUNT === 0) {
        text = line.split('');
        LOOP_COUNT = 1;
        return;
    }
    const keyword = line.split('');
    const keywordTable = generateTable(keyword);
    let result = 'Not Exist';
    let j = 0;
    
    for (const i in [...Array(text.length).keys()]) {
        if (j > 0 && text[i] !== keyword[j])
            j = keywordTable[j - 1];
        if (text[i] === keyword[j])
            if (j === keyword.length - 1) {
                result = 'Exist';
                break;
            } else j += 1;
    }
    console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});