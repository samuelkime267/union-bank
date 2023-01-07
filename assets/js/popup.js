const closePopup = document.getElementById("close-popUp");
const showPopup = document.getElementById("showPop-up");
const popup = document.getElementById("popUp");
console.log(popup);
showPopup.addEventListener("click", (e) => {
  e.preventDefault();
  popup.classList.add("show-popUp-container");
});
closePopup.addEventListener("click", () => {
  popup.classList.remove("show-popUp-container");
});
