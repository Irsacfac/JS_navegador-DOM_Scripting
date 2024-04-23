// querySelector
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); // retorna todos los que concuerden con el selector
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
enlaces[0].classList.remove("navegacion__enlace");

// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);