const starsElements = document.querySelectorAll('[data-stars]');
starsElements.forEach(starsEl => {
    const input = starsEl.querySelector('input');
    let starsValue = starsEl.getAttribute('data-stars-value');
    const items = starsEl.querySelectorAll('.stars__item');
    let state = numberToArray(starsValue);

    const setState = () => {
        items.forEach((item, index) => {
            const value = state[index];
            const icon = item.querySelector('.stars__item-solid-icon');
            
            if(value) {
                icon.style.setProperty('width', (100 * value)+'%');
            } else {
                icon.style.setProperty('width', '0%');
            }
        })
    }

    setState();

    items.forEach((item, index) => {
        const value = index + 1;

        item.addEventListener('click', () => {
            input.setAttribute('value', value);
            input.value = value;
            state = numberToArray(value);
            setState();
        });

        item.addEventListener('mouseenter', () => {
            state = numberToArray(value);
            setState();
        })
    });


    starsEl.addEventListener('mouseleave', (e) => {
        state = numberToArray(input.value);
        setState();
    })
})

function numberToArray(num) {
    const parts = String(num).split('.');
    const integerPart = parseInt(parts[0]);
    const result = Array(integerPart).fill(1);

    if (parts[1]) {
        const fractionalPart = parseFloat('0.' + parts[1]);
        result.push(fractionalPart);
    }

    return result;
}

{
    function truncateString(el, stringLength = 0) {
        let str = el.innerText;
        if (str.length <= stringLength) return;
        el.innerText = str.slice(0, stringLength) + '...';
    }

    const reviewsSlider = document.querySelector('[data-slider="reviews"]');
    if(reviewsSlider) {
        const reviewCards = Array.from(reviewsSlider.querySelectorAll('.review-card'));
        const textAndButtons = reviewCards.map(card => {
            return {
                text: card.querySelector('.review-card__text'),
                btn: card.querySelector('.review-card__show-more-btn'),
            }
        });

        textAndButtons.forEach(({ text, btn }) => {
            const str = text.innerText.trim();

            if(str.length <= 306) {
                btn.style.setProperty('display', 'none');
            } else {
                text.oldText = str;
                text.innerText = str.slice(0, 306) + '...';
            }
        })


        let swiper = new Swiper(reviewsSlider.querySelector('.swiper'), {
            speed: 600,
            pagination: {
                el: reviewsSlider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: reviewsSlider.querySelector('.btn-right'),
                prevEl: reviewsSlider.querySelector('.btn-left'),
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 16,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                    autoHeight: false,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 16,
                    autoHeight: false,
                },
            },
        });

        textAndButtons.forEach(({ text, btn }) => {
            btn.addEventListener('click', () => {
                text.oldText && (text.innerHTML = text.oldText);
                btn.style.setProperty('display', 'none');
                swiper.updateAutoHeight(200);
            })
        })
    }
}