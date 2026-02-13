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

    if (fecha - new Date() < 568024668000) {
        mostrarError(errorFecha, "La fecha no es válida. Debes ser mayor de Edad.");
        return false;
    }

    limpiarError(errorFecha);
    return true;
};

function validarProvincia() {

};

function validarPassword() {

};

function validarPassword2() {

};

function validarObservaciones() {

};

function validarTerminos() {

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

};

function generarResumenErrores() {

};

function limpiarFormulario() {

};