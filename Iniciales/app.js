//Preguntando nombre y apellido
var name = prompt("¿Cuál es tu nombre y apellido?");

//obteniendo primera Iniciales
var firstInitial = name.slice(0,1);

//Buscando posicion del segundo caracter
var secondInitialPosition = name.indexOf(" ") +1;

//Obteniendo segunda Iniciales
var secondInitial = name.slice(secondInitialPosition,secondInitialPosition+1);

console.log(firstInitial+secondInitialPosition);

//Mostrando Resultado en la WEb
document.write("Tus inciales son" +firstInitial.toUpperCase()+secondInitial.toUpperCase()); // .toUpperCase() es para que se vea en mayuscula
