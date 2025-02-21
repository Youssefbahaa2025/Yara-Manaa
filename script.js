// Smooth Scrolling for all anchor links starting with "#"
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Progress Bar Update on Scroll
const progressBar = document.querySelector(".progress-bar");
window.addEventListener("scroll", () => {
  const scrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (window.scrollY / scrollHeight) * 100;
  progressBar.style.width = scrolled + "%";
});

// Scroll-to-Top Button Functionality
const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
  scrollToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
});

scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Hide Loading Animation on Window Load
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  loader.style.display = "none";
});
