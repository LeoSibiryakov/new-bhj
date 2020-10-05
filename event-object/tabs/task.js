const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

for (let i = 0; i < tab.length;i++) {
    tab[i].addEventListener('click', function() {
        for (let x = 0; x < tab.length; x++) {
            tab[x].classList.remove('tab_active');
            tabContent[x].classList.remove('tab__content_active');
        }
        
        tab[i].classList.add('tab_active');
        tabContent[i].classList.add('tab__content_active');
    })
}
