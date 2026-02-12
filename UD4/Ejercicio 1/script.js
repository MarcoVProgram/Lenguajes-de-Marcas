console.log("Mi Script funciona");
//Comienzo del programa
const pepino = document.getElementById('boton');

const lechuga = document.getElementById('mensaje');

pepino.addEventListener('click', () => {
	console.log('¡El botón fue presionado!');
});

var option = 0;
pepino.addEventListener('click', () => {
	// Cambiamos el texto del párrafo con un nuevo mensaje
	if (option == 0) {
		lechuga.textContent = '¡Este es un mensaje dinámico generado por Marco Valiente Rodriguez!';
		option = 1;
	}
	else if (option == 1) {
		lechuga.textContent = '¡Este mensaje vuelve a salir tras darle click, continua dándole!';
		option = 0;
	}
});