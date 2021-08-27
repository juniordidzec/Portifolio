const btnRight = document.querySelector('.button-arrow.-right');
const btnleft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.elements');
let pixels = 0;

btnRight.addEventListener('click', function() {
    pixels = pixels + 50;
    elements.style = `transform: translateX(${pixels}px)`;
    console.log(pixels);
});

btnleft.addEventListener('click', function(){
    pixels = pixels - 50;
    elements.style = `transform: translateX(${pixels}px)`;
    console.log(pixels);
});