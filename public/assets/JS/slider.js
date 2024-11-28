var sliderDiv = document.querySelector(".slider-container");
var seletores = document.querySelectorAll(".seletor");
var elementos = document.querySelectorAll(".slide-element");
var slideWidth = sliderDiv.scrollWidth / elementos.length; // calcula a largura de cada slider para que ele possa deslizar

for (let i = 0; i < seletores.length; i++) { // percorre todos os elementos dos seletores
    seletores[i].addEventListener("click", (event) => {
        // event.preventDefault();

        sliderDiv.scrollLeft = i * slideWidth;
    });
}