{

    let mobileCarousels = document.querySelectorAll('[data-slider="mobile-carousel"]');
    if (mobileCarousels.length) {
        mobileCarousels.forEach(slider => {
            if (slider) {
                let mySwiper;

                function mobileSlider() {
                    if (document.documentElement.clientWidth <= 767 && slider.dataset.mobile == 'false') {
                        mySwiper = new Swiper(slider, {
                            slidesPerView: 1,
                            spaceBetween: 12,
                            speed: 600,
                        });

                        slider.dataset.mobile = 'true';
                    }

                    if (document.documentElement.clientWidth > 767) {
                        slider.dataset.mobile = 'false';

                        if (slider.classList.contains('swiper-initialized')) {
                            mySwiper.destroy();
                        }
                    }
                }

                mobileSlider();

                window.addEventListener('resize', () => {
                    mobileSlider();
                })
            }
        })
    }
}