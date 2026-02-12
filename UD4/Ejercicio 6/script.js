console.log("This script is working");

//Document
const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const btnSumar = document.getElementById('btnSumar');
const btnRestar = document.getElementById('btnRestar');
const btnMultiplicar = document.getElementById('btnMultiplicar');
const btnDividir = document.getElementById('btnDividir');
const btnPotencia = document.getElementById('btnPotencia');
const btnModulo = document.getElementById('btnModulo');
const btnLimpiar = document.getElementById('btnLimpiar');
const resultadoSalida = document.getElementById('resultado');
const mensajeSalida = document.getElementById('mensaje');

//Constantes
var decimals = 2;

function readNumbers() {
    const n1 = Number(num1.value);
    const n2 = Number(num2.value);

    if (isNaN(n1) || isNaN(n2)) {
        return null;
    }

    return {
        n1: n1,
        n2: n2
    }
};

function sum(a,b) {
    return (a + b);
};

function subtract(a,b) {
    return (a - b);
};

function multiply(a,b) {
    return (a * b);
};

function divide(a,b) {
    
    if (b === 0) {
        return null;
    }

    return (a / b);
};

function power(a,b) {
    return (a ** b);
}

function modulo(a,b) {
    if (b === 0) {
        return null;
    }

    return (a % b);
}

function showOutput (valor, mensaje) {
    if (mensaje === undefined) {
        mensaje = "";
    }

    resultadoSalida.textContent = valor;
    mensajeSalida.textContent = mensaje;
};

function executeOperation(operation) {
    const data = readNumbers();

    if (data === null) {
        showOutput("—", "Tienes que introducir dos números válidos");
        return;
    }

    const n1 = data.n1;
    const n2 = data.n2;

    var output = operation(n1, n2);

    if (output === null) {
        showOutput("—", "No se puede realizar esta operación");
        return;
    } else {
        if (Math.abs(output*10000) % 1 > 0) {
            output = output.toFixed(decimals);
        }
    }

    showOutput(output, "Operación realizada completamente");
};

btnSumar.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Sumar');
    executeOperation(sum);
});

btnRestar.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Restar');
    executeOperation(subtract);
});

btnMultiplicar.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Multiplicar');
    executeOperation(multiply);
});

btnDividir.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Dividir');
    executeOperation(divide);
});

btnPotencia.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Potencia');
    executeOperation(power);
});

btnModulo.addEventListener('click', function () {
    console.log('Se ha escuchado al evento Modulo');
    executeOperation(modulo);
});

btnLimpiar.addEventListener('click', function () {
    console.log('Se ha escuchado al evento ');
    num1.value = null;
    num2.value = null;
    showOutput("—","");

    num1.focus();
});

showOutput("—", "Introduce dos números y selecciona una operación");