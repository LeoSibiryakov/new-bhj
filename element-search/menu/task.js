const item = document.querySelectorAll('.menu__link'); 

for (let i = 0; i < item.length; i++) { 

    item[i].onclick = function() { 

        let element = item[i].parentElement.querySelector('ul'); 

        if (element) {

            let active = element.className.includes('menu_active');

            close(item[i]);

            if (active) {

                element.classList.remove('menu_active');

            } else {

                element.classList.add('menu_active');
            }

            return false;
        }
    }
}

function close(e) {
    let open = e.closest('.menu_main').querySelector('.menu_active');

    if (open) {
        open.classList.remove('menu_active');
    }
}