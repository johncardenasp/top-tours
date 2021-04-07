/*=========== SHOW MENU ===========*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle("show-menu");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

/*=========== SWIPER JS ===========*/
let galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});

let galleryTop = new Swiper(".gallery-top", {
  effect: "fade",
  loop: true,
  thumbs: {
    swiper: galleryThumbs,
  },
});

/*=========== POPUP ===========*/
const btnOpenVideo = document.querySelectorAll(".top__video-content");
const topPopup = document.getElementById("popup");

function popup() {
  topPopup.classList.add("show-popup");
}

btnOpenVideo.forEach((b) => b.addEventListener("click", popup));

const btnCloseVideo = document.getElementById("popup-close");
btnCloseVideo.addEventListener("click", () => {
  topPopup.classList.remove("show-popup");
});

/*=========== GSAP ANIMATION ===========*/
const controlImg = document.querySelectorAll(".controls__img");

function ScrollAnimation() {
  gsap.from(".top__subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from(".top__title", {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from(".top__description", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from(".top__button", {
    opacity: 0,
    duration: 0.5,
    delay: 0.5,
    y: -20,
  });
  gsap.from(".top__video/content", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });

  topPopup.classList.remove("show-popup");
}

controlImg.forEach((e) => e.addEventListener("click", ScrollAnimation));
