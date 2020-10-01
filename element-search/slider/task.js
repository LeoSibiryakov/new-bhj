const arrowPrev = document.querySelector('.slider__arrow_prev'); 
const arrowNext = document.querySelector('.slider__arrow_next'); 
const sliderItem = document.querySelectorAll('.slider__item');

let counter = 0;

arrowNext.onclick = function() {
    sliderItem[counter].className = 'slider__item';  
    counter++;

    if (counter >= sliderItem.length) {
        counter = 0;
    }

    sliderItem[counter].classList.add('slider__item_active');
}

arrowPrev.onclick = function() {
    sliderItem[counter].className = 'slider__item';
    counter--;

    if (counter < 0) {
        counter = sliderItem.length - 1;
    }

    sliderItem[counter].classList.add('slider__item_active');
}