document.addEventListener("DOMContentLoaded", function () {
  const heroText = document.querySelector(".hero h1");
  heroText.style.opacity = 0;

  setTimeout(() => {
    heroText.style.transition = "opacity 1.5s ease";
    heroText.style.opacity = 1;
  }, 300);

  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });
});
