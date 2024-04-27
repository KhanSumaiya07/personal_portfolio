var cursor = document.querySelector(".cursor");
window.addEventListener('mousemove', function (a) {
  cursor.style.left = a.x + 'px';
  cursor.style.top = a.y + 'px';
})
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

var nav = document.querySelector("nav");
var category = document.querySelector(".category");
var close = document.querySelector(".close");

// Smooth opening of the navigation
category.addEventListener("click", function () {
  gsap.to(nav, {
    right: 0,
    duration: 0.5,
  });
});

// Smooth closing of the navigation
close.addEventListener("click", function () {
  gsap.to(nav, {
    right: "-100%",
    duration: 0.5,
  });
});