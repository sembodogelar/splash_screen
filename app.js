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

        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);
    }, 0);
});

// Hide the intro screen when the logo-header is clicked
logo.addEventListener('click', () => {
    intro.style.top = '-100vh';
});
