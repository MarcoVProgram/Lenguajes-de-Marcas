console.log("Mi Script funciona");
//Comienzo del programa
const p1 = document.getElementById('boton1');
const p2 = document.getElementById('boton2');
const p3 = document.getElementById('boton3');
const p4 = document.getElementById('boton4');
const p5 = document.getElementById('boton5');
const p6 = document.getElementById('boton6');
const p7 = document.getElementById('boton7');
const p8 = document.getElementById('boton8');
const p9 = document.getElementById('boton9');
const p10 = document.getElementById('boton10');
const p11 = document.getElementById('boton11');
const p12 = document.getElementById('boton12');
const p13 = document.getElementById('boton13');
const p14 = document.getElementById('boton14');

const textoPantalla = document.getElementById('mensaje');
textoPantalla.setAttribute('style', 'white-space: pre;');



p1.addEventListener('click', () => {
	console.log('El boton 1 funciona correctamente');
	// Hacemos una Prompt
	var edad1 = parseInt(prompt('Por favor, introduce tu edad'));
	if (edad1 >= 18) {
		textoPantalla.textContent = 'Eres mayor de Edad';
	}
	else {
		textoPantalla.textContent = "No Eres mayor de Edad";
	}
});

p2.addEventListener('click', () => {
	console.log('El boton 2 funciona correctamente');
	//Repetimos el calculo pero cambiamos el else
	var edad2 = parseInt(prompt('Por favor, introduce tu edad'));
	if (edad2 >= 18) {
		textoPantalla.textContent = 'Eres mayor de Edad';
	}
	else {
		textoPantalla.textContent = "Eres menor de Edad";
	}
});

p3.addEventListener('click', () => {
	console.log('El boton 3 funciona correctamente');
	// Solo hay que mostrar con calculo
	var numNat = "";

	for (var i = 1; i <= 20; i++) {
		if (i != 1) {
			numNat += ", ";
		}
		numNat += i;
	}

	textoPantalla.textContent = 'Los primeros 20 numeros naturales son: ' + numNat;
});

p4.addEventListener('click', () => {
	console.log('El boton 4 funciona correctamente');
	// Se hacen bucles de 2 en 2
	var serie200en2 = "";
	for (var i = 2; i <= 200;i+=2) {
		if (serie200en2 != "") {
			serie200en2 += ", ";
			if (i % 60 == 0) {
				serie200en2 += "\r\n";
			}
		}
		serie200en2 += i;
	}
	textoPantalla.textContent = 'Los pares en los 200 primeros numeros son: ' + serie200en2 + '\r\n(saltos de 2 en 2)';
});

p5.addEventListener('click', () => {
	console.log('El boton 5 funciona correctamente');
	// Se hacen bucles de 1 en 1
	var serie200en1 = "";
	for (var i = 1; i <= 200;i++) {
		if (i % 2 == 0) {
			if (serie200en1 != "") {
				serie200en1 += ", ";
				if (i % 60 == 0) {
					serie200en1 += "\r\n";
				}
			}
			serie200en1 += i;
		}
	}
	textoPantalla.textContent = 'Los pares en los 200 primeros numeros son: ' + serie200en1 + '\r\n(saltos de 1 en 1)';
});

p6.addEventListener('click', () => {
	console.log('El boton 6 funciona correctamente');
	// Se pide el final del bucle y se hace el bucle
	var destino = parseInt(prompt('Por favor, introduce el numero al que deseas contar'));
	var todosNums = "";
	for (var i = 1; i <= destino;i++) {
		if (todosNums != "") {
			todosNums += ", ";
			if (i % 30 == 0) {
				todosNums += "\r\n";
			}
		}
		todosNums += i;
	}
	textoPantalla.textContent = 'Los numeros desde 1 hasta ' + destino + ' son ' + todosNums;
});

p7.addEventListener('click', () => {
	console.log('El boton 7 funciona correctamente');
	// Se hacen cadenas de ifs
	var notaNum = parseFloat(prompt('Por favor, escribe una nota a calificar'));
	console.log(notaNum);
	var notaAlfa = "";
	if (notaNum < 3) {
		notaAlfa = "Muy Deficiente";
	} else if (3 <= notaNum && notaNum < 5) {
		notaAlfa = "Insuficiente";
	} else if (3 <= notaNum && notaNum < 5) {
		notaAlfa = "Insuficiente";
	} else if (5 <= notaNum && notaNum < 6) {
		notaAlfa = "Bien";
	} else if (6 <= notaNum && notaNum < 9) {
		notaAlfa = "Notable";
	} else if (9 <= notaNum && notaNum <= 10) {
		notaAlfa = "Sobresaliente";
	} else {
		notaAlfa = "Nota Fuera de Rango";
	}

	textoPantalla.textContent = 'La nota es calificada como ' + notaAlfa;
});

p8.addEventListener('click', () => {
	console.log('El boton 8 funciona correctamente');
	// Se busca el limite del loop
	var limite = parseInt(prompt('Por favor, introduce un número para calcular factorial'));
	var factorial = 1;

	for (var i = 2; i<=limite; i++) {
		factorial *= i;
	}

	textoPantalla.textContent = 'El factorial de ese numero es ' + factorial;
});

p9.addEventListener('click', () => {
	console.log('El boton 9 funciona correctamente');
	// Se hacen tres prompts
	var hora = parseInt(prompt('Por favor, introduce las horas'));
	var minuto = parseInt(prompt('Por favor, introduce los minutos'));
	var segundo = parseInt(prompt('Por favor, introduce los segundos'));

	segundo++;

	if (segundo >= 60) {
		segundo -= 60;
		minuto++;
		if (minuto >= 60) {
			minuto -= 60;
			hora++;
			if (hora >= 24) {
				hora -= 24
			}
		}
	}

	textoPantalla.textContent = 'La hora 1 segundo después será: ' + hora + ':' + minuto + ':' + segundo;
});

p10.addEventListener('click', () => {
	console.log('El boton 10 funciona correctamente');
	// Se lee en bucle
	var totalNeg1 = 0;
	var numLeido1;

	for (var i = 0; i < 10; i++) {
		numLeido1 = parseInt(prompt('Por favor, introduce un número no nulo'));
		if (numLeido1 == 0) {
			console.log("Error, numero nulo introducido, sumando uno mas al loop");
			i--;
			continue;
		}
		if (numLeido1 < 0) {
			totalNeg1++;
		}
	}

	textoPantalla.textContent = 'Has introducido ' + totalNeg1 + ' Numeros Negativos';
});

p11.addEventListener('click', () => {
	console.log('El boton 11 funciona correctamente');
	// Se lee en bucle
	var totalNeg2 = 0;
	var totalPos2 = 0;
	var numLeido2;

	for (var i = 0; i < 10; i++) {
		numLeido2 = parseInt(prompt('Por favor, introduce un número no nulo'));
		if (numLeido2 == 0) {
			console.log("Error, numero nulo introducido, sumando uno mas al loop");
			i--;
			continue;
		}
		if (numLeido2 < 0) {
			totalNeg2++;
		} else {
			totalPos2++;
		}
	}

	textoPantalla.textContent = 'Has introducido ' + totalNeg2 + ' Numeros Negativos y ' + totalPos2 + ' Numeros Positivos';
});

p12.addEventListener('click', () => {
	console.log('El boton 12 funciona correctamente');
	// Se lee en bucle
	var totalNeg3 = 0;
	var totalPos3 = 0;
	var numLeido3 = 1;

	while (numLeido3 != 0) {
		numLeido3 = parseInt(prompt('Por favor, introduce un número, usa el numero nulo para parar'));
		if (numLeido3 == 0) {
			continue;
		}
		if (numLeido2 < 0) {
			totalNeg2++;
		} else {
			totalPos2++;
		}
	}

	textoPantalla.textContent = 'Has introducido ' + totalNeg2 + ' Numeros Negativos y ' + totalPos2 + ' Numeros Positivos';
});

p13.addEventListener('click', () => {
	console.log('El boton 13 funciona correctamente');
	//Solo se necesita de un loop
	var mult = 1;
	var suma = 0;

	for (var i = 1; i >= 10; i++) {
		mult *= i;
		suma += i;
	}

	textoPantalla.textContent = 'La suma de los primeros 10 numeros es ' + suma + ' y su multiplicacion es ' + mult;
});

p14.addEventListener('click', () => {
	console.log('El boton 14 funciona correctamente');
	//Se necesitan leer varios datos
	var nombre = prompt("Por favor, escribe el nombre del usuario");
	var horasTrabajadas = parseFloat(prompt("Por favor, inserte sus horas trabajadas"));
	var tasa = parseFloat(prompt("Por favor, inserte su tasa"));
	var bruto, neto;

	if (horasTrabajadas <= 35) {
		bruto = tasa * horasTrabajadas;
	}
	else {
		bruto = (35 * tasa) + ((horasTrabajadas-35)*1.5*tasa);
	}

	if (bruto <= 500) {
		neto = bruto;
		textoPantalla.textContent = "Trabajador: " + nombre + "\r\n";
		textoPantalla.textContent += "Salario Neto: " + neto.toFixed(2) + "€ (bruto: " + bruto.toFixed(2) + "€)\r\n";
		textoPantalla.textContent += "Tasas de impuestos: Menos de 500€";
	} else if (bruto <= 900) {
		neto = 500 + (bruto - 500)*0.75;
		textoPantalla.textContent = "Trabajador: " + nombre + "\r\n";
		textoPantalla.textContent += "Salario Neto: " + neto.toFixed(2) + "€ (bruto: " + bruto.toFixed(2) + "€)\r\n";
		textoPantalla.textContent += "Tasas de impuestos: 500 a 900€, 25% de impuestos a partir de 500€";
	} else {
		neto = 500 + 400*0.75 + (bruto - 900)*0.55;
		textoPantalla.textContent = "Trabajador: " + nombre + "\r\n";
		textoPantalla.textContent += "Salario Neto: " + neto.toFixed(2) + "€ (bruto: " + bruto.toFixed(2) + "€)\r\n";
		textoPantalla.textContent += "Tasas de impuestos: Mas de 900€, 500€ sin tasas, 25% sobre 400€ y a partir de estas pagas 45% de impuestos";
	}
});