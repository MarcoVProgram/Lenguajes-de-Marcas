console.log("My Script works");

const estadoGeneral = document.getElementById('estadoGeneral');
const estadoTexto = document.getElementById('estadoTexto');

const formRegistro = document.getElementById('formRegistro');

const nombre = document.getElementById('nombre');
const errorNombre = document.getElementById('errorNombre');

const apellidos = document.getElementById('apellidos');
const errorApellidos = document.getElementById('errorApellidos');

const email = document.getElementById('email');
const errorEmail = document.getElementById('errorEmail');

const telefono = document.getElementById('telefono');
const errorTelefono = document.getElementById('errorTelefono');

const fechaNacimiento = document.getElementById('fechaNacimiento');
const errorFecha = document.getElementById('errorFecha');

const provincia = document.getElementById('provincia');
const errorProvincia = document.getElementById('errorProvincia');

const password = document.getElementById('password');
const errorPassword = document.getElementById('errorPassword');

const password2 = document.getElementById('password2');
const errorPassword2 = document.getElementById('errorPassword2');

const observaciones = document.getElementById('observaciones');
const errorObs = document.getElementById('errorObs');

const newsletter = document.getElementById('newsletter');

const terminos = document.getElementById('terminos');
const errorTerminos = document.getElementById('errorTerminos');

const resumen = document.getElementById('resumen');

const listaErrores = document.getElementById('listaErrores');

const btnEnviar = document.getElementById('btnEnviar');
const btnReset = document.getElementById('btnReset');

//Funcion LeerDato
function leerTexto(input) {
    return input.value.trim();
};

//Funcion Validacion
function validarNombre() {

    const n = leerTexto(nombre);
    const patron = /^[a-z][a-z\s]{1,29}$/i;
    
    if(!n.match(patron)) {
        mostrarError(errorNombre, "El nombre está mal introducido. Revísalo de nuevo.");
        return false;
    }
    
    limpiarError(errorNombre);
    return true;
};

function validarApellidos() {

    const a = leerTexto(apellidos);
    if (a.length < 2 || a.length > 60){
        mostrarError(errorApellidos, "El apellido está mal introducido. Revísalo de nuevo.");
        return false;
    }


    limpiarError(errorApellidos);
    return true;
};

function validarEmail() {

    const e = leerTexto(email);
    const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if(!e.match(patron)) {
        mostrarError(errorEmail, "El email está mal introducido. Revísalo de nuevo.");
        return false;
    }
    
    limpiarError(errorEmail);
    return true;
};

function validarTelefono() {

    const t = leerTexto(telefono);
    const patron = /^[0-9]{9}$/;

    if (!t.match(patron)) {
        mostrarError(errorTelefono, "El telefono está mal introducido. Revísalo de nuevo.");
        return false;
    }

    limpiarError(errorTelefono);
    return true;
};

function validarFecha() {
    
    const f = leerTexto(fechaNacimiento);
    const fecha = new Date(f);

    if (new Date() - fecha < 568024668000) {
        mostrarError(errorFecha, "La fecha no es válida. Debes ser mayor de Edad.");
        return false;
    }

    limpiarError(errorFecha);
    return true;
};

function validarProvincia() {

    const p = leerTexto(provincia);
    
    if (p == '') {
        mostrarError(errorProvincia, "Debes seleccionar una provincia.");
        return false;
    }

    limpiarError(errorProvincia);
    return true;
};

function validarPassword() {

    const contra1 = leerTexto(password);
    const minReq = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if (!contra1.match(minReq)) {
        mostrarError(errorPassword, "La contraseña es insuficiente. Revisala e intentalo de nuevo.")
        return false;
    }
    
    limpiarError(errorPassword);
    return true;
};

function validarPassword2() {
    
    if (!validarPassword()) {
        mostrarError(errorPassword2, "No puedes copiar una contraseña no valida");
        return false;
    }

    const contra2 = leerTexto(password2);
    const contra1 = leerTexto(password);

    if (!contra2.match(contra1)) {
        mostrarError(errorPassword2, "Las contraseñas no coinciden.");
        return false;
    }

    limpiarError(errorPassword2);
    return true;
};

function validarObservaciones() {

    const longitud = leerTexto(observaciones).length;

    if (longitud > 200) {
        mostrarError(errorObs, "Demasiados caracteres.");
        return false;
    }

    limpiarError(errorObs);
    return true;
};

function validarTerminos() {

    var terms = terminos.checked;

    if (terms == false) {
        mostrarError(errorTerminos, "Debes aceptar los terminos y condiciones.");
        return false;
    }

    limpiarError(errorTerminos);
    return true;
};

//Funciones Interfaz
function mostrarError(idError, mensaje) {
    idError.textContent = mensaje;
};

function limpiarError(idError) {
    idError.textContent = '';
};

function actualizarEstadoGeneral(texto, correcto) {

};

//Funciones Generales
function validarFormulario() {

    var validacion = generarResumenErrores();

    if (validacion) {
        estadoGeneral.style.color ='rgb(51, 160, 51)';
    } else {
        estadoGeneral.style.color ='rgb(194, 49, 49)';
    }

    return validacion;
};

function generarResumenErrores() {

    let valid = [];
    valid[0] = validarNombre();
    valid[1] = validarApellidos();
    valid[2] = validarEmail();
    valid[3] = validarTelefono();
    valid[4] = validarFecha();
    valid[5] = validarProvincia();
    valid[6] = validarPassword();
    valid[7] = validarPassword2();
    valid[8] = validarObservaciones();
    valid[9] = validarTerminos();

    let errores = "";
    let allValid = true;

    for (let i = 0; i < valid.length; i++) {

        if (valid[i] === false) {

            allValid = false;

            switch (i) {
                case 0: errores += '<li>Nombre Incorrecto</li>'; break;
                case 1: errores += '<li>Apellido Incorrecto</li>'; break;
                case 2: errores += '<li>Email Incorrecto</li>'; break;
                case 3: errores += '<li>Teléfono Incorrecto</li>'; break;
                case 4: errores += '<li>Fecha Incorrecta</li>'; break;
                case 5: errores += '<li>Provincia Incorrecta</li>'; break;
                case 6: errores += '<li>Contraseña Incorrecta</li>'; break;
                case 7: errores += '<li>Las contraseñas no coinciden</li>'; break;
                case 8: errores += '<li>Observaciones demasiado largas</li>'; break;
                case 9: errores += '<li>Debes aceptar los términos</li>'; break;
            }
        }
    }

    if (allValid) {
        errores = "<li>—</li>";
    }

    listaErrores.innerHTML = errores;

    return allValid;
};

function limpiarFormulario() {
    
    limpiarError(errorNombre);
    limpiarError(errorApellidos);
    limpiarError(errorEmail);
    limpiarError(errorTelefono);
    limpiarError(errorFecha);
    limpiarError(errorProvincia);
    limpiarError(errorPassword);
    limpiarError(errorPassword2);
    limpiarError(errorObs);
    limpiarError(errorTerminos);
    
};

nombre.addEventListener('input', () => {
    validarNombre();
});

apellidos.addEventListener('input', () => {
    validarApellidos();
});

email.addEventListener('input', () => {
    validarEmail();
});

telefono.addEventListener('input', () => {
    validarTelefono();
});

fechaNacimiento.addEventListener('input', () => {
    validarFecha();
});

provincia.addEventListener('input', () => {
    validarProvincia();
});

password.addEventListener('input', () => {
    validarPassword();
});

password2.addEventListener('input', () => {
    validarPassword2();
});

observaciones.addEventListener('input', () => {
    validarObservaciones();
});

terminos.addEventListener('input', () => {
    validarTerminos();
});

btnReset.addEventListener('click', () => {
    limpiarFormulario();
});

formRegistro.addEventListener('submit', (e) => {

  e.preventDefault(); // Evita que se recargue la página

    if (validarFormulario()) {
        estadoTexto.textContent = "Formulario válido ✅";
    } else {
        estadoTexto.textContent = "Hay errores en el formulario, corrígelos e inténtalo nuevamente ❌";
    }
});