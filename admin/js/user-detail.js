const btnDelete = document.querySelector(".btn-delete-user");
const divDelete = document.querySelector(".div-delete-user");
const btnClose = document.querySelector(".btn-close-user");

btnDelete.addEventListener("click", function() {
    divDelete.style.display= "block";
});

btnClose.addEventListener("click", function() {
    divDelete.style.display= "none";
});