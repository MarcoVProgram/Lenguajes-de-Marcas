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

const textoPantalla = document.getElementById('mensaje');
textoPantalla.setAttribute('style', 'white-space: pre;');



p1.addEventListener('click', () => {
	console.log('El boton 1 funciona correctamente');
	// Hacemos una Prompt
	var numI = parseInt(prompt('Inserte Número Inicial'));
	var numF = parseInt(prompt('Inserte Número Final'));
	var numFinal = numF,
		numInicial = numI;
	if (numI > numF) {
		numFinal = numI;
		numInicial = numF;
	}
	var todosNums = "";
	for (var i = numInicial; i < numFinal; i++) {
		if (todosNums != "") {
			todosNums += ", ";
			if (i % 30 == 0) {
				todosNums += "\r\n";
			}
		}
		todosNums += i;
	}
	textoPantalla.textContent = 'Los números desde ' + numInicial + ' hasta ' + numFinal + ' son ' + todosNums;
});

p2.addEventListener('click', () => {
	console.log('El boton 2 funciona correctamente');
	//Repetimos el calculo pero cambiamos el else
	var numLim = parseInt(prompt('Introduce hasta que número contar'));
	var sumTotal = 0;
	for (var i = 1; i < numLim; i++) {
		if (i % 2 == 0) {
			sumTotal = sumTotal + i;
		}
	}
	textoPantalla.textContent = 'La suma de los números pares desde 1 hasta ' + numLim + ' es igual a ' + sumTotal;
});

p3.addEventListener('click', () => {
	console.log('El boton 3 funciona correctamente');
	// Pide 5 numeros
	var num1 = parseInt(prompt('Introduce el primer número'));
	var num2 = parseInt(prompt('Introduce el segundo número'));
	var num3 = parseInt(prompt('Introduce el tercer número'));
	var num4 = parseInt(prompt('Introduce el cuarto número'));
	var num5 = parseInt(prompt('Introduce el quinto número'));

	var sum = num1 + num2 + num3 + num4 + num5;
	var media = sum/5;
	var mayorMedia = 0;

	if (num1 > media) {
		mayorMedia++;
	}
	if (num2 > media) {
		mayorMedia++;
	}
	if (num3 > media) {
		mayorMedia++;
	}
	if (num4 > media) {
		mayorMedia++;
	}
	if (num5 > media) {
		mayorMedia++;
	}

	textoPantalla.textContent = 'La suma de los números es: ' + sum + '\r\nLa media de los números es: ' + media + '\r\nHay ' + mayorMedia + ' números por encima de la media';
});

p4.addEventListener('click', () => {
	console.log('El boton 4 funciona correctamente');
	// Se hacen cadenas de ifs
	var notaNum = parseFloat(prompt('Por favor, escribe una nota a calificar'));
	console.log(notaNum);
	var notaAlfa = "";
	while (notaNum < 0 || notaNum > 10) {
		notaNum = parseFloat(prompt('Por favor, asegurese que sea válida'));
	}
	if (notaNum < 3) {
		notaAlfa = "MD - Muy Deficiente";
	}else if (3 <= notaNum && notaNum < 5) {
		notaAlfa = "IN - Insuficiente";
	} else if (5 <= notaNum && notaNum < 6) {
		notaAlfa = "BI - Bien";
	} else if (6 <= notaNum && notaNum < 9) {
		notaAlfa = "NT - Notable";
	} else if (9 <= notaNum && notaNum <= 10) {
		notaAlfa = "SB - Sobresaliente";
	} else {
		notaAlfa = "Nota Fuera de Rango";
	}

	textoPantalla.textContent = 'La nota es calificada como ' + notaAlfa;
});

p5.addEventListener('click', () => {
	console.log('El boton 5 funciona correctamente');
	// Se hacen bucles de 1 en 1
	var numMaximo = parseInt(prompt('Por favor, introduce el número al que deseas contar'));
	var numDivisores = parseInt(prompt('Por favor, introduce el número que desee calcular múltiplos'));
	var serieDivisores = "";

	for (var i = 1; i <= numMaximo;i++) {
		if (numDivisores % i == 0) {
			if (serieDivisores != "") {
				serieDivisores += ", ";
			}
			serieDivisores += i;
		}
	}
	textoPantalla.textContent = 'Los divisores de ' + numDivisores + ' entre 1 y ' + numMaximo + 'son: ' + serieDivisores;
});

p6.addEventListener('click', () => {
	console.log('El boton 6 funciona correctamente');
	// Calculo factorial
	var limite = parseInt(prompt('Por favor, introduce un número para calcular factorial'));
	var factorial = 1;

	if (limite < 0) {
		factorial = "erroneo, número es negativo";
	}
	else {
		for (var i = 2; i<=limite; i++) {
			factorial *= i;
		}
	}

	textoPantalla.textContent = 'El factorial de ese numero es ' + factorial;
});

p7.addEventListener('click', () => {
	console.log('El boton 7 funciona correctamente');
	// Pide 10 numeros
	var misNums;
	var mayor = -1/0;
	var menor = 1/0;
	var positivos = 0;
	var negativos = 0;

	for (var i = 0; i < 10; i++) {
		misNums = parseInt(prompt('Por favor, introduce un número'));
		if (misNums > mayor) {
			mayor = misNums;
		}
		if (misNums < menor) {
			menor = misNums;
		}
		if (misNums > 0) {
			positivos++;
		} else if (misNums < 0) {
			negativos++;
		}
	}

	textoPantalla.textContent = 'El mayor de los números es: ' + mayor + '\r\nEl menor de los números es: ' + menor +
	'\r\nHay ' + positivos + ' números positivos y ' + negativos + ' números negativos';
});

p8.addEventListener('click', () => {
	console.log('El boton 8 funciona correctamente');
	// Pide infinitos números
	var miNum = 0;
	var sumaFinal = 0;
	var total = 0;

	while (miNum >= 0) {
		miNum = parseInt(prompt('Por favor, introduce un número'));
		if (miNum >= 0) {
			sumaFinal += miNum;
			total++;
		}
	}

	textoPantalla.textContent = 'Has escrito ' + total + ' números\r\nLa suma de los números es: ' + sumaFinal;
});

p9.addEventListener('click', () => {
	console.log('El boton 9 funciona correctamente');
	// Se Usa un bucle para leer los datos
	var tablaNum = parseInt(prompt('Por favor, introduce un número para ver sus tablas de multiplicar'));

	textoPantalla.textContent = 'Tabla de multiplicar del número ' + tablaNum;

	for (var i = 1; i <= 10; i++) {
		
		textoPantalla.textContent += '\r\n' + tablaNum + ' × ' + i + ' = ' + (tablaNum*i);
	}
});

p10.addEventListener('click', () => {
	console.log('El boton 10 funciona correctamente');
	// Simulador de Intentos
	var numSecreto = Math.floor(Math.random*129);
	console.log("El numero secreto es " + numSecreto);

	var numAdivinado = -9999;
	var intentos = 0;
	while (numAdivinado != numSecreto) {
		numAdivinado = parseInt(prompt('Por favor, introduce un número intento para adivinar del 1 al 128'));
		intentos++;
	}

	textoPantalla.textContent = 'Has encontrado el número secreto ' + numSecreto + ' en ' + intentos + ' intentos';
});
	