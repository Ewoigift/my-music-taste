var lastScrollTop = 0;
navbar = document.getElementById("nav-bar");
window.addEventListener("scroll", function() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            navbar.style.top = "-250px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = st <= 0 ? 0 : st;

    }) // or window.addEventListener("scroll"....


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});