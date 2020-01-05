const btn = document.getElementById("cta-btn");
const overlay = document.getElementById("overlay");
const home = document.getElementById("home");

home.addEventListener("click", () =>
  scrollTo({
    top: 0,
    behavior: "smooth"
  })
);

btn.addEventListener("click", () => {
  overlay.style.display = "grid";
  overlay.classList.add("animate-overlay");
  setTimeout(() => {
    overlay.classList.remove("animate-overlay");
    overlay.style.display = "none";
  }, 2000);
});
