
let val1 = parseFloat(prompt("Introduce primer nota, del 1 al 10:"));
let val2 = parseFloat(prompt("Introduce Segunda nota, del 1 al 10:"));
let val3 = parseFloat(prompt("Introduce Tercer nota, del 1 al 10:"));
let val4 = parseFloat(prompt("Introduce Cuarta nota, del 1 al 10:"));
let val5 = parseFloat(prompt("Introduce Quinta nota, del 1 al 10:"));

let promedio = (val1+val2+val3+val4+val5)/5;

if (promedio<5) {
    document.write(`REPROBADO, su promedio es: ${promedio} </br>`);
} else {
    if (promedio>5 && promedio<=8) {
        document.write(`APROBADO, su promedio es:  ${promedio}</br>`);
    } else {
        if (promedio>8) {
            document.write(`SOBRESALIENTE, su promedio es: ${promedio}</br>`);
        }
    }
}

document.write(`Las notas ingresadas fueron: ${val1}, ${val2}, ${val3}, ${val4}, ${val5} </br>`);