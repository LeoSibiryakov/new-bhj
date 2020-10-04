const dropdownItem = document.querySelectorAll('.dropdown__item');
const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

function list() {

    dropdownList.classList.add('dropdown__list_active');

    for (let i = 0; i < dropdownItem.length; i++) {
        const element = dropdownItem[i];
        
        element.onclick = function() {
            dropdownList.classList.remove('dropdown__list_active');
            dropdownValue.textContent = element.textContent;

            return false;
        }
    }
}

dropdownValue.addEventListener('click', list);