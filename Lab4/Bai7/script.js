const buttonContainer = document.getElementById('buttonContainer');
const buttons = [];

// Tạo và thêm các số từ 1 đến 64 vào mảng numbers
const numbers = [];
for (let i = 1; i <= 64; i++) {
    numbers.push(i);
}

// Trộn ngẫu nhiên mảng numbers
for (let i = numbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
}

// Tạo và thêm các button vào container với số lần xuất hiện ngẫu nhiên
numbers.forEach(number => {
    const button = document.createElement('button');
    button.textContent = number;
    button.addEventListener('click', () => checkButton(number));
    buttons.push(button);
    buttonContainer.appendChild(button);
});

let expectedClick = 1;

function checkButton(number) {
    if (number === expectedClick) {
        expectedClick++;
        if (expectedClick > 64) {
            alert('Chúc mừng! Bạn đã hoàn thành trò chơi.');
        }
        buttons[number - 1].remove();
    } else {
        alert('Sai rồi! Hãy thử lại.');
    }
}
