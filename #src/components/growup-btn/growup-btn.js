{
    let btn = document.createElement('button');
    btn.className = 'btn-growup';
    btn.innerHTML = `
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="40" cy="40" r="39" fill="url(#paint0_linear_107_3812)" fill-opacity="0.72" stroke="url(#paint1_linear_107_3812)" stroke-width="2"/>
        <path d="M41.0607 25.9393C40.4749 25.3536 39.5251 25.3536 38.9393 25.9393L29.3934 35.4853C28.8076 36.0711 28.8076 37.0208 29.3934 37.6066C29.9792 38.1924 30.9289 38.1924 31.5147 37.6066L40 29.1213L48.4853 37.6066C49.0711 38.1924 50.0208 38.1924 50.6066 37.6066C51.1924 37.0208 51.1924 36.0711 50.6066 35.4853L41.0607 25.9393ZM41.5 53L41.5 27L38.5 27L38.5 53L41.5 53Z" fill="white"/>
        <defs>
        <linearGradient id="paint0_linear_107_3812" x1="2.56108e-06" y1="-5.96491" x2="73.3333" y2="80" gradientUnits="userSpaceOnUse">
        <stop stop-color="#6FD6FD"/>
        <stop offset="1" stop-color="#55B5F5"/>
        </linearGradient>
        <linearGradient id="paint1_linear_107_3812" x1="0" y1="0" x2="70.5" y2="80" gradientUnits="userSpaceOnUse">
        <stop stop-color="#57B8F6"/>
        <stop offset="1" stop-color="#6CD2FC"/>
        </linearGradient>
        </defs>
        </svg>    
    `;

    document.body.append(btn);

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })

    window.addEventListener('scroll', () => {
        btn.classList.toggle('btn-growup--show', window.pageYOffset > document.documentElement.clientHeight / 2);
    })
}