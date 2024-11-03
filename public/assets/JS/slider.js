var sliderDiv = document.querySelector(".slider-container");
var seletores = document.querySelectorAll(".seletor");
var elements = document.querySelectorAll(".slide-element");
var slideWidth = sliderDiv.scrollWidth / elements.length;

for (let i = 0; i < seletores.length; i++) {
    seletores[i].addEventListener("click", (event) => {
        event.preventDefault();

        sliderDiv.scrollLeft = i * slideWidth;
    });
}