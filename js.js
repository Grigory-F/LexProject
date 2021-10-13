document.querySelector(".burger-button").addEventListener("click", () => {
    document.querySelector(".main-nav__list-link").classList.toggle("main-nav__list-link--visible");
})
document.querySelector(".copy-button").addEventListener("click", () => {
    navigator.clipboard.writeText(document.querySelector('input').value)
  .then(() => {
    alert("Скопировано")
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
})
