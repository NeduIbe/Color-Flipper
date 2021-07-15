const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelector('.color');
const button = document.getElementById('btn');

button.addEventListener('click', function(){
    let randomColor = '#';
    for (let i = 0; i < 6; i++) {
      randomColor += hex[Math.floor(Math.random()*hex.length)];
    };
    document.body.style.background = randomColor;
    color.textContent = randomColor
})