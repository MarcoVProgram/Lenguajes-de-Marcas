console.log("Bienvenido al Documento");


//Ej1
const btnPedirNotas = document.getElementById('btnPedirNotas');
const datosNotas = document.getElementById('datosNotas');

function registrarNotas() {
    const patron = /^[0-9]{1,}$/;

    let notas = [];
    var nota;

    var media = 0;
    var aprobadas = 0;
    var suspensas = 0;
    var min = 1/0;
    var max = -1/0;

    for (var i = 0; i < 10; i++) {
        nota = prompt("Introduce la nota numero " + (i+1));

        if (!nota.match(patron) || nota < 0 || nota > 10) {
            alert("Nota no Valida, repitalo");
            i--;
            continue;
        }

        notas[i] = parseFloat(nota);

        if (notas[i] > max) {
            max = notas[i];
        }
        if (notas[i] < min) {
            min = notas[i];
        }

        media += notas[i];

        if (notas[i] >= 5) {
            aprobadas++;
        } else {
            suspensas++;
        }
    }

    media = media / 10;

    var resultado = 'Las Notas son: ' + notas + ' | ' +
        'La Nota Media es: ' + media + ' | ' +
        'La Nota Más Alta es: ' + max + ' | ' +
        'La Nota Más Baja es: ' + min + ' | ' +
        'Hay ' + aprobadas + ' notas aprobadas | ' +
        'Hay ' + suspensas + ' notas suspensas';

    escribir(datosNotas, resultado);
}

btnPedirNotas.addEventListener('click', () => {
    registrarNotas();
})


//Ejercicio 2
const btnProd = document.getElementById('btnProd');
const cajaProd = document.getElementById('cajaProd');

function escucharProd() {
    var prod = '';
    let coleccion = [];
    var contador = 0;
    
    var regex = /^\s$/i
    var end = /^[f][i][n]$/i


    while (!prod.match(end)) {
        prod = prompt("Introduce un Producto (o 'fin' para acabar)");

        if (prod == '' || prod.match(regex)) {
            alert("No es valido algo en blanco");
            continue;
        }

        if (!prod.match(end)) {
            coleccion[contador] = prod;
            contador++;
        }
    }

    var busqueda = prompt("Introduce un producto a buscar");
    var existe = false;
    var resultado = "Esta es la lista de productos: ";

    for (var i = 0; i < coleccion.length; i++) {

        resultado += coleccion[i] + " | ";

        if(busqueda == coleccion[i] && !existe) {
            alert("Su Producto existe")
            existe = true;
        }
    }
    if (!existe) {
        alert("Su producto no existe");
    }

    
    resultado += " hay un total de " + contador + " productos";

    escribir(cajaProd, resultado);
}

btnProd.addEventListener('click', () => {
    escucharProd();
})


//Ej3 - PENDIENTE


//Ej4
const btnStats = document.getElementById('btnStats');
const datosStats = document.getElementById('datosStats');

function registrarStats() {
    const patron = /^[-]{0,1}[0-9]{1,}$/;

    let stats = [];
    var stat = 1;

    var i = 0;

    var suma = 0;
    var media;
    var positivos = 0;
    var negativos = 0;

    while (stat != 0) {
        stat = prompt("Introduce la estadistica " + (i+1));

        if (!stat.match(patron)) {
                alert("Estadistica no Valida, repitalo");
                continue;
            }

            if (parseFloat(stat) != 0) {
            stats[i] = parseFloat(stat);

            suma += stats[i];

            if (stats[i] > 0) {
                positivos++;
            } else if (stats[i] < 0) {
                negativos++;
            }
            i++;
        }
    }

    media = suma / i;

    var resultado = 'La cantidad de datos introducidos es: ' + i + ' | ' +
        'La Suma Total es: ' + suma + ' | ' +
        'La Media es: ' + media + ' | ' +
        'Hay ' + positivos + ' numeros positivos | ' +
        'Hay ' + negativos + ' numeros negativos';

    escribir(datosStats, resultado);
}

btnStats.addEventListener('click', () => {
    registrarStats();
})


//Ej5
const btnFrase = document.getElementById('btnFrase');
const datosFrase = document.getElementById('datosFrase');

function analizarFrase() {

    var vacio = /\s/
    
    const frase = prompt("Introduce su frase");

    var contador = 0;
    var vocal = 0;

    for(var i = 0; i < frase.length; i++) {

        if (frase[i].match(vacio)) {
            continue;
        }

        contador++;

        if (frase[i] == 'a' || frase[i] == 'e' ||frase[i] == 'i' ||frase[i] == 'o' ||frase[i] == 'u' ) {
            vocal++;
        }
    }

    var resultado = "La frase tiene " + frase.length + " caracteres, o " + contador + " caracteres (excluyendo espacios), y tiene " + vocal + " vocales";
    escribir(datosFrase, resultado);
}

btnFrase.addEventListener('click', () => {
    analizarFrase();
})


//Ej6


//Ej7
const btnAlu = document.getElementById('btnAlu');
const datosAlu = document.getElementById('datosAlu');

function guardarAlumnos() {

    var cantidad = parseInt(prompt("Introduce cuantos alumnos deseas guardar"));
    var nombre;
    let nombres = [];

    var resultado = "Los Alumnos son: "

    for (var i = 0; i < cantidad; i++) {
        nombre = prompt("Introduce el nombre del alumno numero " + (i+1))

        nombres[i] = nombre;

        resultado += nombre + " | ";
    }

    escribir(datosAlu, resultado);
}

btnAlu.addEventListener('click', () => {
    guardarAlumnos();
})


//Ej 7
const btnAle = document.getElementById('btnAle');
const datosAle = document.getElementById('datosAle');

function genAle() {

    var cantidad = parseInt(prompt("Introduce cuantos num aleatorios deseas guardar"));
    var ale;
    let col = [];

    var resultado = "Los Datos son: ";
    var entre = 0;

    var min = 1/0;
    var max = -1/0;

    for (var i = 0; i < cantidad; i++) {
        ale = Math.floor(Math.random()*100);

        col[i] = ale;

        resultado += ale + " | ";

        if (ale > 49 && ale < 81) {
            entre++;
        }

        if (ale > max) {
            max = ale;
        }

        if (ale < min) {
            min = ale;
        }
    }

    resultado += " hay " + entre + " numeros entre 50 y 80";
    resultado += " | El numero mayor es " + max + " y el menor es " + min;

    escribir(datosAle, resultado);
}

btnAle.addEventListener('click', () => {
    genAle();
})

function escribir(idTexto, texto) {
    idTexto.textContent = texto;
}


