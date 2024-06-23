document.addEventListener('DOMContentLoaded', function() {
    const faBars = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('.header');

    faBars.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    const onScrollOrLoad = function() {
        faBars.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');

        if (window.scrollY < 30) {
            header.style.background = 'dark-gray';
            header.style.boxShadow = '0 .2rem .5rem rgba(0, 0, 0, 0.4)';
        } else {
            header.style.background = 'none';
            header.style.boxShadow = 'none';
        }
    };

    window.addEventListener('load', onScrollOrLoad);
    window.addEventListener('scroll', onScrollOrLoad);
});
