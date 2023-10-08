$(document).ready(function() {
    const rotatingImage = $('#rotatingImage');
    let rotationDegree = 0;

    function rotateImage() {
        rotationDegree += 15;
        rotatingImage.css('transform', `rotate(${rotationDegree}deg)`);
    }

    setInterval(rotateImage, 2000);
});
