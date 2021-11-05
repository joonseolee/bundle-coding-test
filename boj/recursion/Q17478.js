// Run by Node.js
// 재귀함수가 뭔가요?

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

const input = [];
const textList = [
    '"재귀함수가 뭔가요?"\n',
    '"잘 들어보게. 옛날옛날 한 산 꼭대기에 이세상 모든 지식을 통달한 선인이 있었어.\n',
    '마을 사람들은 모두 그 선인에게 수많은 질문을 했고, 모두 지혜롭게 대답해 주었지.\n',
    '그의 답은 대부분 옳았다고 하네. 그런데 어느 날, 그 선인에게 한 선비가 찾아와서 물었어."\n',
    '라고 답변하였지.\n'
];

const spaceText = '____';

rl.on("line", function(line) {
    input.push(line);
}).on("close", function() {
    const count = Number(input[0]);
    let result = '어느 한 컴퓨터공학과 학생이 유명한 교수님을 찾아가 물었다.\n';

    const call = repeatCount => {
        const thisSpaceText = spaceText.repeat(repeatCount);

        if (repeatCount === count) {
            result += (thisSpaceText + textList[0] 
                + thisSpaceText + '"재귀함수는 자기 자신을 호출하는 함수라네"\n' 
                + thisSpaceText + textList[textList.length - 1])
            return;
        }

        textList
            .map(element => thisSpaceText + element)
            .filter((_, index) => textList.length - 1 !== index)
            .forEach(it => result += it);

        call(repeatCount + 1);

        result += (thisSpaceText + textList[textList.length - 1]);
    }

    call(0);
    console.log(result);
	process.exit();
});