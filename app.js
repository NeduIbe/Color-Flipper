const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(){
    let randomColor = colors [Math.floor(Math.random()*colors.length)];
    color.textContent = randomColor
    document.body.style.background = randomColor
})