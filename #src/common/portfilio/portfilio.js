{
    let portfolioSlider = document.querySelector('[data-slider="portfolio-slider"]');
    if (portfolioSlider) {
        let sliderPortfolio = new Swiper(portfolioSlider.querySelector('.swiper'), {
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 600,
            loop: true,
            pagination: {
                el: portfolioSlider.querySelector('.swiper-pagination'),
                clickable: true,
            },
            navigation: {
                nextEl: portfolioSlider.querySelector('.portfolio__slider-btn.btn-next'),
                prevEl: portfolioSlider.querySelector('.portfolio__slider-btn.btn-prev'),
            }
        });

        let portfolioItemSliders = document.querySelectorAll('[data-slider="portfolio-item-slider"]');
        if(portfolioItemSliders.length) {
            portfolioItemSliders.forEach(portfolioItemSlide => {
                let sliderPortfolioItem = new Swiper(portfolioItemSlide.querySelector('.swiper'), {
                    slidesPerView: 1,
                    spaceBetween: 20,
                    autoHeight: true,
                    speed: 600,
                    loop: true,
                    navigation: {
                        nextEl: portfolioItemSlide.querySelector('.portfolio-item__btn.btn-next'),
                        prevEl: portfolioItemSlide.querySelector('.portfolio-item__btn.btn-prev'),
                    },
                    on: {
                        slideChange: () => {
                            let id  = setInterval(() => sliderPortfolio.update(), 20); 
                            setTimeout(() => clearInterval(id), 620);
                        }
                    }
                });
                
            })
        }
    }


}