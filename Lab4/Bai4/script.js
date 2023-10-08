document.getElementById('countButton').addEventListener('click', () => {
    const inputA = document.getElementById('inputA').value;
    const inputB = document.getElementById('inputB').value;

    if (inputA && inputB) {
        const count = countOccurrences(inputA, inputB);
        document.getElementById('result').textContent = `Số lần xuất hiện của "${inputB}" trong "${inputA}": ${count}`;
    } else {
        document.getElementById('result').textContent = 'Vui lòng nhập cả đoạn văn (A) và dòng (B)';
    }
});

function countOccurrences(textA, textB) {
    const regex = new RegExp(textB, 'g');
    const matches = textA.match(regex);
    return matches ? matches.length : 0;
}
