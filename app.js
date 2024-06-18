let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpans = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });
    }, 0);
});
