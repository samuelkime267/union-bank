const showSideBar = document.getElementById("sidebarBtn-show");
const headProfile = document.getElementById("user-img-head");
const headProfileMenu = document.getElementById("nav-img-menu");
const sideBar = document.querySelector("aside");
const closeSideBar = document.getElementById("sidebarBtn-close");
showSideBar.addEventListener("click", () => {
  sideBar.classList.add("sidebar-show");
});
closeSideBar.addEventListener("click", () => {
  sideBar.classList.remove("sidebar-show");
});
headProfile.addEventListener("click", () => {
  headProfileMenu.classList.toggle("fit-content");
});
