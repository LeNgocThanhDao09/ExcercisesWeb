const colorButtons = document.querySelectorAll('.color-button');
const body = document.body;

colorButtons.forEach(button => {
    button.addEventListener('click', () => {
        const bgColor = button.style.backgroundColor;
        body.style.backgroundColor = bgColor;
    });
});
