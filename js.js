document.querySelector(".burger-button").addEventListener("click", () => {
  document.querySelector(".main-nav__list-link").classList.toggle("main-nav__list-link--visible");
})

document.querySelector(".bell-button").addEventListener("click", (event) => {
  event.target.classList.toggle("bell-button--active")
  document.querySelector(".bell-button__header-popup").classList.toggle("bell-button__header-popup--active")
});



document.querySelector(".copy-button").addEventListener("click", () => {
  navigator.clipboard.writeText(document.querySelector('input').value)
    .then(() => {
      alert("Скопировано")
    })
    .catch(err => {
      console.log('Something went wrong', err);
    });
})



