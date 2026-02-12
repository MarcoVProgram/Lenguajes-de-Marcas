console.log("El documento funciona");
document.addEventListener('DOMContentLoaded', function() {
    console.log("Web cargada");
    //Ejercicio 1
    alert("La página ha cargado");

    //Ejercicio 2
    const h2 = document.getElementById('titulo');
    h2.textContent = 'Contenido Cargado Correctamente';

    //Ejercicio 3
    const btnContador = document.getElementById('btnContador');
    const contador = document.getElementById('contador');
    var numero = contador.innerHTML;

    if (contador && btnContador) {
        btnContador.addEventListener('click', () => {
            console.log("Se ha hecho click correctamente");
            numero++;
            
            contador.textContent = numero;
        });
    }

    //Ejercicio 4
    var modoOscuro = false;
    const btnColor = document.getElementById('btnColor');
    const cajaColor = document.getElementById('cajaColor');

    btnColor.addEventListener('click', () => {
        console.log("Se ha hecho click correctamente");
        if (modoOscuro) {
            modoOscuro = false;
            cajaColor.style.backgroundColor = "lightblue";
        } else {
            cajaColor.style.backgroundColor = "blue";
            modoOscuro = true;
        }
    });

    //Ejercicio 5
    const zonaHover1 = document.getElementById('zonaHover1');
    const hoverMsg1 = document.getElementById('hoverMsg1');

    zonaHover1.addEventListener('mouseover', () => {
        console.log("El raton esta encima de la zona");
        hoverMsg1.textContent = 'Ratón encima';
    });

    //Ejercicio 6
    const zonaHover2 = document.getElementById('zonaHover2');
    const hoverMsg2 = document.getElementById('hoverMsg2');
    zonaHover2.addEventListener('mouseenter', () => {
        console.log("El ratón ha entrado");
        hoverMsg2.textContent = 'Dentro del Área';
    });

    zonaHover2.addEventListener('mouseout', () => {
        console.log("El ratón ha salido");
        hoverMsg2.textContent = 'Fuera del Área';
    });

    //Ejercicio 7
    const texto = document.getElementById('texto');
    const eco = document.getElementById('eco');

    texto.addEventListener('input', () => {
        console.log("Input ha sido recibido");
        eco.textContent = texto.value;
    });

    //Ejercicio 8
    const textoConfirm = document.getElementById('textoConfirm');
    const confirmMsg = document.getElementById('confirmMsg');

    textoConfirm.addEventListener('change', () => {
        console.log("Ha habido un cambio, se ha salido");
        confirmMsg.textContent = textoConfirm.value;
    });

    //Ejercicio 9
    const teclaMsg = document.getElementById('teclaMsg');

    if (teclaMsg) {
        document.addEventListener('keydown', (e) => {
            console.log("Se ha presionado una tecla");
            teclaMsg.textContent = "Has pulsado la tecla " + e.key;
        });
    }

    //Ejercicio 10
    const btnBloqueado = document.getElementById('btnBloqueado');
    const bloqueadoMsg = document.getElementById('bloqueadoMsg');

    btnBloqueado.addEventListener('mouseover', () => {
        console.log("El ratón ha desbloqueado el botón");
        btnBloqueado.textContent = 'Botón Desbloqueado';
    })

    btnBloqueado.addEventListener('click', () => {
        console.log("Se ha hecho click en el Botón a desbloquear");
        if (btnBloqueado.textContent = 'Botón Desbloqueado') {
            bloqueadoMsg.textContent = '¡Has encontrado el mensaje secreto!';
        }
    })
});