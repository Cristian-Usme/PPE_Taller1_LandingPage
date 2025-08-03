// Banner rotator
let currentBanner = 0;
const banners = document.querySelectorAll('.banner-slide');
const prevBtn = document.querySelector('.banner-prev');
const nextBtn = document.querySelector('.banner-next');

function showBanner(idx) {
    banners.forEach((b, i) => {
        b.classList.toggle('active', i === idx);
    });
}
function nextBanner() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}
function prevBanner() {
    currentBanner = (currentBanner - 1 + banners.length) % banners.length;
    showBanner(currentBanner);
}
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', prevBanner);
    nextBtn.addEventListener('click', nextBanner);
    setInterval(nextBanner, 5000);
}
// Contact form (demo only)
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por contactarnos!');
            form.reset();
        });
    }
    // Floating button action
    const floatBtn = document.querySelector('.floating-btn');
    if (floatBtn) {
        floatBtn.addEventListener('click', function() {
            window.open('https://wa.me/573001112233', '_blank');
        });
    }
});
