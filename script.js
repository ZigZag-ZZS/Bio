function scrollToSection(selector) {
    var target = document.querySelector(selector);
    var startPosition = window.scrollY;
    var targetPosition = target.offsetTop;
    var distance = targetPosition - startPosition;
    var startTime;

    function animateScroll(time) {
        if (!startTime) startTime = time;
        var progress = time - startTime;
        var percentage = Math.min(progress / 800, 1); // Продолжительность анимации 800 мс

        window.scrollTo(0, startPosition + distance * percentage);

        if (progress < 800) {
            requestAnimationFrame(animateScroll);
        }
    }
    requestAnimationFrame(animateScroll);
}