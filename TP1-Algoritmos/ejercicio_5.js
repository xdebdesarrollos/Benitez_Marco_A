//Crea o iniciliza las variables
let dato, resultado;
// Carga en la variable val1 lo que introduce el usuario por pantalla
val1 = window.prompt("Introduce tu nombre", "...");
// Carga en la variable val2 lo que introduce el usuario por pantalla
val2 = window.prompt("Introduce tu apellido", "...");
//Carga en la variable resultado un texto junto a la concatenación de ambas variables
resultado =`Concatenado tu nombre y apellido es: ${val1} ${val2} `
//Imprime en navegador el valor de la variable resultado
document.write(resultado);