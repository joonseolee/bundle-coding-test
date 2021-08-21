// Run by Node.js

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
    let result = "";
    const strings = Array.from(line);
    const stringsLegth = strings.length;
    Array.from({ length: (stringsLegth % 2 === 0 
        ? stringsLegth / 2 
        : stringsLegth / 2 + 1) }, (_, i) => i).forEach((index) => {
            if (index === stringsLegth - index - 1) {
                result += strings[index];
                return;
            }
            result += (strings[index] + strings[stringsLegth - index - 1]);

        });
	console.log(result);
	rl.close();
}).on("close", function() {
	process.exit();
});