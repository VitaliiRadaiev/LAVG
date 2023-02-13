{
    let hiddenListWrapElements = document.querySelectorAll('[data-hidden-list]');
    if(hiddenListWrapElements.length) {
        hiddenListWrapElements.forEach(wrapElement => {
            let toggleBtn = wrapElement.querySelector('.hidden-list__toggle-btn');

            if(toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    if(wrapElement.classList.contains('list-is-open')) {
                        wrapElement.classList.remove('list-is-open');
                        toggleBtn.classList.remove('list-is-open');
                    } else {
                        wrapElement.classList.add('list-is-open');
                        toggleBtn.classList.add('list-is-open');
                    }
                })
            }
        })
    }
}