
document.getElementById('hide-button').addEventListener('click', function () {
    this.style.display = 'none';
});


document.getElementById('toggle-button').addEventListener('click', function () {
    const textDiv = document.getElementById('text');
    if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block';
    } else {
        textDiv.style.display = 'none';
    }
});


document.addEventListener('click', function (event) {
    const ball = document.getElementById('ball');
    const ballDiameter = ball.offsetWidth;

    let newLeft = event.clientX - ballDiameter / 2;
    let newTop = event.clientY - ballDiameter / 2;

    const maxLeft = document.documentElement.clientWidth - ballDiameter;
    const maxTop = document.documentElement.clientHeight - ballDiameter;

    if (newLeft < 0) newLeft = 0;
    if (newTop < 0) newTop = 0;
    if (newLeft > maxLeft) newLeft = maxLeft;
    if (newTop > maxTop) newTop = maxTop;

    ball.style.transform = `translate(${newLeft}px, ${newTop}px)`;
});
