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

/*=========== POPUP ===========*/
const btnOpenVideo = document.querySelectorAll(".islands__video-content");
const islandsPopup = document.getElementById("popup");

function popup() {
  islandsPopup.classList.add("show-popup");
}

btnOpenVideo.forEach((b) => b.addEventListener("click", popup));

const btnCloseVideo = document.getElementById("popup-close");
btnCloseVideo.addEventListener("click", () => {
  islandsPopup.classList.remove("show-popup");
});

/*=========== GSAP ANIMATION ===========*/
