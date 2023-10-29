window.addEventListener('load', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        header.classList[
            window.scrollY > header.clientHeight ? 'add' : 'remove'
        ]('sticky');
    });
});
