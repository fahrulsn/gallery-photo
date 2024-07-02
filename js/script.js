const nav = document.querySelector(".nav");

document.querySelector("#hamburg").onclick = () => {
  nav.classList.toggle("active");
};
const hamburg = document.querySelector("#hamburg");

document.addEventListener("click", (e) => {
  if (!hamburg.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

const navbar = document.querySelector(".navbar");
window.onscroll = () => {
  let scrollTop = window.innerHeight;
  let scrollY = window.scrollY;

  if (scrollY >= scrollTop) {
    navbar.style.backgroundColor = "#000000b3";
  } else {
    navbar.style.backgroundColor = "#00000000";
  }
};
window.addEventListener(
  "contextmenu",
  (e) => {
    e.preventDefault();
  },
  false
);
