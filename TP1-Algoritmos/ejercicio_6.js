let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo" ,"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
val1 = window.prompt("Introduce el número de mes que necesita visualizar del 1 al 12");
if (val1 >= 1 && val1 <= 12) {
    mes= meses[val1 - 1];
  } else {
    alert(`Numero de mes no valido`);
  }

  document.write(`El número de mes ingresado por pantalla es ${val1} y corresponde al mes de ${mes}`);