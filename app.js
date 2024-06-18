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

        // Add the glow effect after all spans have faded in
        setTimeout(() => {
            logo.classList.add('glow');
        }, (logoSpans.length + 1) * 400);
    }, 0);
});

// Hide the intro screen and fade out logo-header when it is clicked
logo.addEventListener('click', () => {
    logoSpans.forEach((span, idx) => {
        setTimeout(() => {
            span.classList.remove('active');
            span.classList.add('fade');
        }, (idx + 1) * 50);
    });

    // Wait for the fade-out animation to complete before hiding the intro screen
    setTimeout(() => {
        intro.style.top = '-100vh';
    }, (logoSpans.length * 50) + 500); // Adjust timing to match the fade animation
});
