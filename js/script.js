document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.soft__more-toggle');

    toggles.forEach(toggle => {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = toggle.getAttribute('data-target');
            const content = document.getElementById(targetId);
            if (content) {
                content.classList.toggle('open');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('burger-toggle');
    const menu = document.getElementById('burger-menu');

    toggle.addEventListener('click', () => {
        toggle.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Закриття меню при кліку поза ним
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !toggle.contains(e.target)) {
            toggle.classList.remove('active');
            menu.classList.remove('active');
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const counter = document.getElementById("download-count");
    let current = 27482;

    function formatNumber(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function incrementCounter() {
        const increment = Math.floor(Math.random() * 3); // 0–2 нових завантажень
        current += increment;
        counter.textContent = formatNumber(current);
    }

    // Оновлювати кожні 8 секунд (можеш змінити)
    setInterval(incrementCounter, 8000);
});


document.addEventListener("DOMContentLoaded", () => {
    const soft = document.querySelector('.soft');
    if (!soft) return;

    const ringCount = 6;

    for (let i = 0; i < ringCount; i++) {
        const ring = document.createElement('div');
        ring.classList.add('soft__ring');

        const size = Math.floor(Math.random() * 120 + 100);
        ring.style.width = `${size}px`;
        ring.style.height = `${size}px`;
        ring.style.top = `${Math.random() * 100}%`;
        ring.style.left = `${Math.random() * 100}%`;
        ring.style.animationDelay = `${Math.random() * 4}s`;

        soft.appendChild(ring);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(
        '.nav-link[href^="#"], .header-logo-link[href^="#"], .intro__button[href^="#"]'
    );
    const header = document.querySelector('.site-header');
    const headerHeight = header.offsetHeight;

    navLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                const offsetTop = target.offsetTop - (headerHeight - 100); // Менший відступ
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }

            // Закриття бургер-меню, якщо відкрите
            const burgerMenu = document.getElementById('burger-menu');
            if (burgerMenu && burgerMenu.classList.contains('active')) {
                burgerMenu.classList.remove('active');
            }
        });
    });
});
