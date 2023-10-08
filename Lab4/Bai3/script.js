// Mảng các lời chào ngẫu nhiên
const greetings = [
    "Xin chào!",
    "Chào buổi sáng",
    "Chào buổi trưa",
    "Chào buổi tối",
    "Hẹn gặp lại",
    "Hello!",
    "Bonjour!",
    "Hola!",
    "Ciao!",
    "Привет!",
    "こんにちは!",
    "안녕하세요!"
];

// Lấy một lời chào ngẫu nhiên từ mảng
const randomIndex = Math.floor(Math.random() * greetings.length);
const randomGreeting = greetings[randomIndex];

// Hiển thị lời chào lên trang web
document.getElementById('randomGreeting').textContent = randomGreeting;
