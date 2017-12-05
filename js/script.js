var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".close-button");
var yourname = popup.querySelector("[name=yourname]");
var youremail = popup.querySelector("[name=youremail]");
var storagename = localStorage.getItem("yourname");
var storageemail = localStorage.getItem("youremail");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  yourname.focus();
  if (storagename) {
    yourname.value = storagename;

  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

popup.addEventListener("submit", function (evt) {
  if (!yourname.value || !youremail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem("yourname", yourname.value);

  }
});
