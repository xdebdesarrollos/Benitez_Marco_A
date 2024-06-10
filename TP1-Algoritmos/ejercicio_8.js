let val1 = window.prompt("Introduce un texto cualquiera sea ", "...");
for (let i = 0; i < val1.length; i++) {
    switch (val1[i]) {
        case "a":
          document.write(`La letra es una "a". Y su posición es la letra Nro. ${i} </br>`);
          i=val1.length;
          break;
        case "e":
            document.write(`La letra es una "e". Y su posición es la letra Nro. ${i}</br>`);
            i=val1.length;
          break;
        case "i":
            document.write(`La letra es una "i". Y su posición es la letra Nro. ${i}</br>`);
            i=val1.length;
          break;
        case "o":
            document.write(`La letra es una "o". Y su posición es la letra Nro. ${i}</br>`);
            i=val1.length;
          break;
        case "u":
            document.write(`La letra es una "u". Y su posición es la letra Nro. ${i}</br>`);
            i=val1.length;
          break;
    }
}
document.write(`El texto escrito fue: ${val1}`);
