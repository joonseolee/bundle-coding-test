// Run by Node.js
// 숫자 카드 2  

const fs = require('fs');
const input = fs
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : 'input.txt')
    .toString().split('\n');

const aList = input[1].split(' ').map(it => it.split(' '));
const bList = input[3].split(' ').map(it => it.split(' '));
const aMap = aList.reduce((acc, cur) => {
    if (acc[cur] === undefined) {
            acc[cur] = 1;
        return acc;
    }
    acc[cur] = acc[cur] + 1;
    return acc;
}, {});
const result = bList.map(it => aMap[it] === undefined ? 0 : aMap[it]);
console.log(result.join(' '));