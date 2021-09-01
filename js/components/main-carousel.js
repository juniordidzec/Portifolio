const btnRight = document.querySelector('.button-arrow.-right');
const btnleft = document.querySelector('.button-arrow.-left');
const items = document.querySelector('.items');
let currentPixelIndex = 0;

btnRight.addEventListener('click', function() {
    if (currentPixelIndex <= 3000){
        currentPixelIndex += 1000; 
    } else {
        currentPixelIndex = 0;
    }
    items.scrollTo(currentPixelIndex, 0);
});

btnleft.addEventListener('click', function(){
    if (currentPixelIndex > 0){
        currentPixelIndex -= 1000; 
    } else {
        currentPixelIndex = 4000;
    }
    items.scrollTo(currentPixelIndex, 0);
});