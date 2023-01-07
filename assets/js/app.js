const navBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");
const aside = document.querySelector("aside");
const accountNavBtn = document.querySelector("#menu-btn-nav");
const closeBtn = document.querySelector("#close-btn");
const transferContainer = document.querySelector(".transfer-details");
const confirmReceiverBtn = document.querySelector("#confirm-receiver");
const transferBtn = document.getElementById("close-transfer");
// side bar
accountNavBtn.addEventListener("click", function () {
  aside.style.display = "flex";
});
closeBtn.addEventListener("click", function () {
  aside.style.display = "none";
});

// account container
transferBtn.addEventListener("click", () => {
  transferContainer.style.opacity = "0";
  transferContainer.style.display = "none";
});
confirmReceiverBtn.addEventListener("click", (e) => {
  e.preventDefault();
  transferContainer.style.opacity = "1";
  transferContainer.style.display = "flex";
});

// nav bar
navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
