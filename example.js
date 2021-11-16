let container = document.querySelector(".slider");
let containerTape = document.querySelector(".slider__tape")
let buttonFurther = document.querySelector(".slider__button-up")
let buttonBack = document.querySelector(".slider__button-down")
let boxes = document.querySelectorAll(".slide")
let slideCounter = 0



buttonFurther.addEventListener("click", () => {
    calcutlateSizeSlide("+")
})

buttonBack.addEventListener("click", () => {
    calcutlateSizeSlide("+")
})

function calcutlateSizeSlide(signMath) {
    sizeSlide = containerTape.scrollWidth / boxes.length;
    if (containerTape.scrollWidth > 450) {
        slideCounter++
        containerTape.style.cssText = `transform: translateX(-${sizeSlide * slideCounter}px)`;
    }

}

