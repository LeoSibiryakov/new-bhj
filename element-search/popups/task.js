const modalMain = document.getElementById('modal_main'); // находим первый выпадающий попап с красной кнопкой
const success = document.getElementById('modal_success'); // второй попап с зелёной кнопкой
const modalClose = document.querySelectorAll('.modal__close'); // элементы закрытия
const showSuccess = document.querySelector('.show-success'); //  красная кнопка

modalMain.classList.add('modal_active'); 

for (let i = 0; i < modalClose.length;i++) {
    modalClose[i].addEventListener('click', function() {
        modalMain.classList.remove('modal_active');
        success.classList.remove('modal_active');
    })
}

showSuccess.onclick = function() {
    success.classList.add('modal_active');
}
