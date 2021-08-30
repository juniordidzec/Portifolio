const btnRight = document.querySelector('.button-arrow.-right');
const btnleft = document.querySelector('.button-arrow.-left');
const slides = document.querySelectorAll('.node-card');
let currentSlideIndex = 0;

btnRight.addEventListener('click', function() {
    if (currentSlideIndex === slides.length - 1) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    }
    slides.forEach(slide => {
        slide.classList.add('-item--hiden');
    })
    slides[currentSlideIndex].classList.remove('-item--hiden');
});

btnleft.addEventListener('click', function(){
    if (currentSlideIndex === 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex--;
    }

    slides.forEach(slide => {
        slide.classList.add('-item--hiden');
    })
    slides[currentSlideIndex].classList.remove('-item--hiden');
});