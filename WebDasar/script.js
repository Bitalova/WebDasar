const menuToggle = document.querySelector("#menu");
const menuItem = document.querySelector("header");

menuToggle.addEventListener("click", function () {
  if (menuItem.classList.contains("active")) {
    menuItem.classList.remove("active");
    menuItem.classList.remove("toggle");
  } else {
    menuItem.classList.add("active");
    menuItem.classList.add("toggle");
  }
});

// smooth scroll

const smoothScroll = document.querySelectorAll("a[href^='#']");

smoothScroll.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerWidth < 768) {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
