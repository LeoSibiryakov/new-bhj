const reveal = document.querySelectorAll('.reveal');
const viewportHeight = window.innerHeight;

    window.addEventListener('scroll', event => {
        for (let rev of reveal) {
        const elementTop = rev.getBoundingClientRect().top;
        
        if (elementTop < viewportHeight && elementTop > 0) {
            rev.classList.add('reveal_active');
        } else {
            rev.classList.remove('reveal_active');
        }
    }
});

