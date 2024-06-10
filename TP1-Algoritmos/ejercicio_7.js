//---------Determinar cuál de los “ elementos de texto ” es mayor, es decir el que contenga más
var valores = [true, false, 2, "hola", "mundo", 3, "char", "HolaMundo"];
var mayor = 0;
var elementoMayor = "";

for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string") {
    let Actual = valores[i].length;
    if (Actual > mayor) {
      mayor = Actual;
      elementoMayor = valores[i];
    }
  }
}

document.write("El elemento de texto con mayor cantidad de letras es:", elementoMayor,"</br>");

//-------------Imprimir estos elementos de menor a mayor cantidad de letras.
var nuevoarreglo = [];

for (let i = 0; i < valores.length; i++) {
  if (typeof valores[i] === "string") {
    nuevoarreglo.push(valores[i]);
  }
}

nuevoarreglo.sort((a, b) => a.length - b.length);

document.write("Elementos de texto de menor a mayor cantidad de letras:</br>");
for (let elemento of nuevoarreglo) {
    document.write(elemento, "</br>");
}

/**Determinar el resultado de las cuatro operaciones matemáticas básicas (suma, resta, multiplicación y
división) realizadas con los dos elementos numéricos**/

var nuevoarreglonumerico = [];
for (let i = 0; i < valores.length; i++) {
    if (typeof valores[i] === "number") {
      nuevoarreglonumerico.push(valores[i]);
    }
  }
document.write("Los 2 números en el arreglo son: ", nuevoarreglonumerico[0], "&nbsp y &nbsp", nuevoarreglonumerico[1],"</br>");
document.write("La suma de los 2 números en el arreglo es: ", nuevoarreglonumerico[0]+nuevoarreglonumerico[1],"</br>");
document.write("La resta de los 2 números en el arreglo es: ", nuevoarreglonumerico[0]-nuevoarreglonumerico[1],"</br>");
document.write("La multiplicación de los 2 números en el arreglo es: ", nuevoarreglonumerico[0]*nuevoarreglonumerico[1],"</br>");
document.write("La división de los 2 números en el arreglo es: ", nuevoarreglonumerico[0]/nuevoarreglonumerico[1],"</br>");