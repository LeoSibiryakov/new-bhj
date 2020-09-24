const modalMain = document.getElementById('modal_main'); // находим первый выпадающий попап с красной кнопкой
const modalClose = document.getElementsByClassName('modal__close_times'); // коллекция элементов-крестиков
const showSuccess = document.getElementsByClassName('show-success'); //  коллекция красной кнопки
const success = document.getElementById('modal_success'); // второй попап с зелёной кнопкой 

const firstClose = modalClose.item(0); // крестик закрытия окна 1 попапа
const secondClose = modalClose.item(1); // крестик закрытия окна 2 попапа
const redPopup = showSuccess.item(0);  // кнопка красная сделать хорошо

modalMain.classList.add('modal_active'); // добавляем класс с первым выпадающий попапом.

firstClose.onclick = function() {
    modalMain.classList.remove('modal_active'); // при нажатии на первый крестик скрываем первый попап
};

redPopup.onclick = function () { // при нажатии на красную кнопку
    modalMain.classList.remove('modal_active');  // удалаем первый попап
    success.classList.add('modal_active'); // и добавляем второй
};

secondClose.onclick = function() { // при нажатии на второй крестик 
    success.classList.remove('modal_active'); // удаляем второй попап
};