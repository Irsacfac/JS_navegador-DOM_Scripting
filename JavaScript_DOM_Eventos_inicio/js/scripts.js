// querySelector
const heading = document.querySelector(".header__texto h2"); // retorna 0 o 1 elemento
heading.textContent = "Nuevo Heading";
console.log(heading);

// querySelectorAll
const enlaces = document.querySelectorAll(".navegacion a"); // retorna todos los que concuerden con el selector
console.log(enlaces[0]);

enlaces[0].textContent = "Nuevo texto para enlace";
enlaces[0].classList.add("nueva-clase");
//enlaces[0].classList.remove("navegacion__enlace");

// getElementById
const heading2 = document.getElementById("heading");
console.log(heading2);

// Generar un nuevo enlace
const nuevoEnlace = document.createElement("A"); // se recomienda que sea en mayusculas

// Agregar el href
nuevoEnlace.href = "nuevo-enlace.html";
// Agregar el texto
nuevoEnlace.textContent = "Un Nuevo Enlace"
// Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");

// Agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);

console.log(nuevoEnlace);



// Eventos
/* console.log(1);

window.addEventListener("load", function () { //load eespera a  que el JS y los archivos  que dependen  del HTML estttén listos
    console.log(2);    
});

window.onload = function(){
    console.log(3);
}

document.addEventListener("DOMContentLoaded", function(){ // solo espera al HTML Usualmente este es el que se utiliza
    console.log(4);
})

console.log(5); */

/*window.onscroll = function() {
    console.log("Scrolling...");
}*/

// Agregar eventos a elementos seleccionados
/* const btnEnviar = document.querySelector(".boton--primario");
btnEnviar.addEventListener("click", function(event){
    console.log(event);
    event.preventDefault();
    console.log("Enviando información");
}); */

// Eventos de los Inputs y Textarea

const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre")
const email = document.querySelector("#email")
const mensaje = document.querySelector("#mensaje")
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto)

email.addEventListener("input", leerTexto);

mensaje.addEventListener("input", leerTexto);

// El evento de submit
// submit para formularios, click para cualquier elemento
formulario.addEventListener("submit",function(e){
    e.preventDefault();

    // Validar el formulario
    const {nombre, email, mensaje} = datos
    if(nombre === "" || email === "" || mensaje ==="") {
        mostrarAlerta("Todos los campos son obligatorios", true);
        return; //corta la ejecución del código
    }
    // Enviar el fomulario
    mostrarAlerta("Formulario enviado correctamente");
})

function leerTexto(e){
    //console.log(e.target.value);
    datos[e.target.id] = e.target.value;
    //console.log(e.target);

    console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add("error");
    }else{
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);
    // Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}

