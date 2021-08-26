// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
	const [characters, text] = line.split(' ');
	const uniqueText = new Set(Array.from(text));
	let result = 'YES';
    for (const [textAtom] of uniqueText) {
        if (characters.indexOf(textAtom) < 0) {
            result = 'NO';
            break;
        }
    }
        

	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});