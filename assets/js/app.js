// Sticky Navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky", window.scrollY > 0);
});

// Hero Section Stats Counter Animation
let animatedNums = document.querySelectorAll(".num");
let interval = 5000;

animatedNums.forEach((animatedNum) => {
    let startValue = 0;
    let endValue = parseInt(animatedNum.getAttribute("data-val"));

    let duration = Math.floor(interval / endValue);

    let counter = setInterval(() => {
        startValue += 1;
        let startPlus = "+";
        animatedNum.textContent = startValue + "" + startPlus;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});


// Scroll To Top
let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
    });

    scrollProgress.style.background = `conic-gradient(#55efa0 ${scrollValue}%, #EDFEF6 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;




// INITIALIZE AOS
AOS.init();