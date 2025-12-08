let cardList = document.querySelector(".card-menu-list--device--size");
let wrapButton = document.querySelector(".content-all");
let wrapTitle = document.querySelector(".content-all__wrap-link");
let wrapIcon = document.querySelector(".content-all__wrap-icon");

wrapButton.addEventListener("click", function () {
  cardList.classList.toggle("slider-menu-list--device--wrap");

  if (cardList.classList.contains("slider-menu-list--device--wrap")) {
    wrapTitle.textContent = "Показать все";
    wrapIcon.style.content = 'url("assets/svg/expand_down.svg")';
    wrapButton.style.marginTop = "24px";
  } else {
    wrapTitle.textContent = "Скрыть";
    wrapButton.style.marginTop = "30px";
    wrapIcon.style.content = 'url("assets/svg/expand_up.svg")';
  }
});

let swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 16,
  loop: true,
  width: 240,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 3,
    },
  },
});
