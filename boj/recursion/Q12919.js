// Run by Node.js
// A와 B 2

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const asIsWords = Array.from(input[0]);
    const toBeWords = Array.from(input[1]);

    const popAndReturnSelf = words => {
        words.pop();
        return words;
    }
    const reverseFunc = words => {
        words.reverse();
        words.pop();
        return words;
    }

    const cal = (aWords, tWords) => {
        if (aWords.length === tWords.length)
            return aWords.join('') === tWords.join('');

        if (tWords.length > 0) {
            const lastValue = tWords[tWords.length - 1];
            if (tWords[0] === 'A' && lastValue === 'A')
                return cal(aWords, popAndReturnSelf(tWords));
            if (tWords[0] === 'A' && lastValue === 'B')
                return false;
            if (tWords[0] === 'B' && lastValue === 'A')
                return cal(aWords, popAndReturnSelf(tWords)) || cal(aWords, reverseFunc(tWords));
            if (tWords[0] === 'B' && lastValue === 'B')
                return cal(aWords, reverseFunc(tWords));
        }
    }

    console.log(cal(asIsWords, toBeWords) ? 1 : 0);
	process.exit();
});