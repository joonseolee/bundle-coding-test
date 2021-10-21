// Run by Node.js
// 셀프 넘버   

const numbers = Array.from({ length: 9999 }, (_, i) => i + 1);

for (let i = 1 ; i < 10000 ; i++) {
    const valueOfConstructor = Array.from(String(i))
        .map(v => Number(v))
        .reduce((acc, cur) => acc + cur, i);
    
    const valueIndex = numbers.indexOf(valueOfConstructor);
    if (valueIndex > -1)
        numbers.splice(valueIndex, 1);
}

numbers.forEach(v => console.log(v));