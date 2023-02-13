let header = document.querySelector('[data-header]');
let headerMenu = document.querySelector('[data-menu]');
let burger = document.querySelector('[data-action="open-menu"]');

if (header) {
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--is-scroll', window.pageYOffset > 50);
    })

    if(burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            header.classList.toggle('menu-is-open');
            headerMenu && headerMenu.classList.toggle('menu--open');
            document.body.classList.toggle('overflow-hidden');
        })
    }
}

