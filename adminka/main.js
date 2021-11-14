
document.querySelector(".sidebar__header-button").addEventListener("click", (event) => {
    event.target.classList.toggle("sidebar__header-button--active-dot")
    document.querySelector(".sidebar__header-popup").classList.toggle("sidebar__header-popup--active")
});


