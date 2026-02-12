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

const textoPantalla = document.getElementById('mensaje');


p1.addEventListener('click', () => {
	console.log('El boton 1 funciona correctamente');
	// Cambiamos el texto del párrafo con un nuevo mensaje
	textoPantalla.textContent = '¡Buenos Dias!';
});

p2.addEventListener('click', () => {
	console.log('El boton 2 funciona correctamente');
	// Hacemos el calculo
	var ladoCuadrado = 5;
	textoPantalla.textContent = 'El area de un cuadrado de lado ' + ladoCuadrado + ' es igual a ' + Math.pow(ladoCuadrado,2);
});

p3.addEventListener('click', () => {
	console.log('El boton 3 funciona correctamente');
	// Se hace un prompt
	var ladoCuadrado2 = prompt('Escribe el lado que desees usar en los calculos');
	textoPantalla.textContent = 'El area de un cuadrado de lado ' + ladoCuadrado2 + ' es igual a ' + Math.pow(ladoCuadrado2,2);
});

p4.addEventListener('click', () => {
	console.log('El boton 4 funciona correctamente');
	// Se hacen dos prompts
	var numOperar1 = parseInt(prompt('Por favor, introduce el primer número'));
	var numOperar2 = parseInt(prompt('Por favor, introduce el segundo número'));

	var sumaNums = numOperar1 + numOperar2;
	var restaNums = numOperar1 - numOperar2;
	var productoNums = numOperar1 * numOperar2;
	var divisionNums = numOperar1/numOperar2

	textoPantalla.textContent = 'Para los números ' + numOperar1 + ' y ' + numOperar2 + ' tenemos la Suma: ' + sumaNums + '; la Resta: ' + restaNums + 
	'; el Rroducto: ' + productoNums + '; la Division: ' + divisionNums;
});

p5.addEventListener('click', () => {
	console.log('El boton 5 funciona correctamente');
	// Se hace un prompt solo
	var radio = parseInt(prompt('Escribe el radio que desees usar en los calculos'));

	var perimetroCirculo = radio*2*Math.PI;
	var areaCirculo = radio*radio*Math.PI;
	var volumenEsfera = radio*radio*radio*Math.PI*(4/3);
	textoPantalla.textContent = 'Para el radio ' + radio + ' tenemos el perimetro de ' + perimetroCirculo + '; el area del circulo ' + areaCirculo +
	'; y volumen de la Esfera de ' + volumenEsfera;
});

p6.addEventListener('click', () => {
	console.log('El boton 6 funciona correctamente');
	// Se hacen dos prompts
	var descuento = parseInt(prompt('Por favor, introduce el precio de descuento'));
	var original = parseInt(prompt('Por favor, introduce el precio original'));

	var porcentajeDescuento = descuento/original;

	textoPantalla.textContent = 'El porcentaje de descuento es ' + porcentajeDescuento*100 + '%';
});

p7.addEventListener('click', () => {
	console.log('El boton 7 funciona correctamente');
	// Se hacen dos prompts
	var millasMarinas = parseInt(prompt('Por favor, introduce la distancia en millas marinas'));
	const conversionMillaMetro = 1852;

	var metros = millasMarinas * conversionMillaMetro;

	textoPantalla.textContent = 'La distancia de ' + millasMarinas + ' millas marinas es ' + metros + ' en metros';
});

p8.addEventListener('click', () => {
	console.log('El boton 8 funciona correctamente');
	// Se hacen dos prompts
	var numOrdenar1 = parseInt(prompt('Por favor, introduce un número a ordenar'));
	var numOrdenar2 = parseInt(prompt('Por favor, introduce un segundo número a ordenar'));

	if (numOrdenar1 > numOrdenar2) {
		textoPantalla.textContent = numOrdenar1 + ', ' + numOrdenar2;
	}
	else {
		textoPantalla.textContent = numOrdenar2 + ', ' + numOrdenar1;
	}
});

p9.addEventListener('click', () => {
	console.log('El boton 9 funciona correctamente');
	// Se hacen dos prompts
	var numMayor1 = parseInt(prompt('Por favor, introduce un número'));
	var numMayor2 = parseInt(prompt('Por favor, introduce un segundo número'));

	if (numMayor1 > numMayor2) {
		textoPantalla.textContent = 'El número mayor es ' + numMayor1;
	}
	else if (numMayor2 > numMayor1) {
		textoPantalla.textContent = 'El número mayor es ' + numMayor2;
	}
	else {
		textoPantalla.textContent = 'Ambos números son Iguales, y son igual a ' + numMayor1;
	}
});

p10.addEventListener('click', () => {
	console.log('El boton 10 funciona correctamente');
	// Se hacen tres prompts
	var findNumMayor1 = parseInt(prompt('Por favor, introduce un número'));
	var findNumMayor2 = parseInt(prompt('Por favor, introduce un segundo número'));
	var findNumMayor3 = parseInt(prompt('Por favor, introduce un tercer número'));
	var mayorDeLosTres = findNumMayor1;

	if (findNumMayor2 > mayorDeLosTres) {
		mayorDeLosTres = findNumMayor2;
	}
	if (findNumMayor3 > mayorDeLosTres) {
		mayorDeLosTres = findNumMayor3;
	}

	textoPantalla.textContent = 'El mayor de los tres números es ' + mayorDeLosTres;
});

p11.addEventListener('click', () => {
	console.log('El boton 11 funciona correctamente');
	// Se hacen dos prompts
	var numOperarNoNull1 = parseInt(prompt('Por favor, introduce el primer número'));
	var numOperarNoNull2 = parseInt(prompt('Por favor, introduce el segundo número'));

	var sumaNums2 = numOperarNoNull1 + numOperarNoNull2;
	var restaNums2 = numOperarNoNull1 - numOperarNoNull2;
	var productoNums2 = numOperarNoNull1 * numOperarNoNull2;
	if (numOperarNoNull2 != 0) {
		divisionNums2 = numOperarNoNull1/numOperarNoNull2
	}
	else {
		divisionNums2 = 'No es Posible, el Denominador es 0';
	}

	textoPantalla.textContent = 'Para los números ' + numOperarNoNull1 + ' y ' + numOperarNoNull2 + ' tenemos la Suma: ' + sumaNums2 + '; la Resta: ' + restaNums2 + 
	'; el Rroducto: ' + productoNums2 + '; la Division: ' + divisionNums2;
});

p12.addEventListener('click', () => {
	console.log('El boton 12 funciona correctamente');
	// Se hacen dos prompts
	var findCualNumMayor1 = parseInt(prompt('Por favor, introduce un número'));
	var findCualMayor2 = parseInt(prompt('Por favor, introduce un segundo número'));
	var mayorDeLosDos = findCualNumMayor1;

	if (findCualMayor2 > mayorDeLosDos) {
		mayorDeLosDos = findCualMayor2;
	}

	textoPantalla.textContent = 'El mayor de los dos números es ' + mayorDeLosDos;
});

p13.addEventListener('click', () => {
	console.log('El boton 13 funciona correctamente');
	var analizaMiNum = parseInt(prompt('Por favor, introduce su número'));
	
	if (analizaMiNum >= 0) {
		textoPantalla.textContent = 'El número dado es positivo';
	}
	else {
		textoPantalla.textContent = 'El número dado es negativo';
	}
	/*var resultado = parseInt(analizaMiNum/Math.abs(analizaMiNum));

	switch (resultado) {
	case 1:
		textoPantalla.textContent = 'El número dado es positivo';
		break;
	case -1:
		textoPantalla.textContent = 'El número dado es negativo';
		break;
	default:
		textoPantalla.textContent = 'El número dado es 0';
		break;
	}*/
});