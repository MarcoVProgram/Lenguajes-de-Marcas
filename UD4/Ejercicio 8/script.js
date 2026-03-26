const tarea = document.getElementById('tarea');
const btnAgregar = document.getElementById('btnAgregar');
const btnVaciar = document.getElementById('btnVaciar');
const totalTareas = document.getElementById('totalTareas');
const tareasCompletadas = document.getElementById('tareasCompletadas');
const tareasPendientes = document.getElementById('tareasPendientes');
const listaTareas = document.getElementById('listaTareas');
 
function obtenerTextoTarea() {
    return tarea.value.trim();
}
 
function limpiarInput() {
    tarea.value = "";
}
 
function agregarTareaAlDOM(texto) {
    const li = document.createElement("li");
    li.classList.add("tarea");
 
    const span = document.createElement("span");
    span.textContent = texto;
 
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-tarea");
 
    const btnCompletar = document.createElement("button");
    btnCompletar.textContent = "Completar";
    btnCompletar.classList.add("btn-accion", "btn-completar");
 
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("btn-accion", "btn-eliminar");
 
    btnCompletar.addEventListener('click', function () {
        li.classList.toggle("completada");
        actualizarContadores();
    });
 
    btnEliminar.addEventListener('click', function () {
        li.remove();
        actualizarContadores();
    });
 
    divAcciones.appendChild(btnCompletar);
    divAcciones.appendChild(btnEliminar);
 
    li.appendChild(span);
    li.appendChild(divAcciones);
    listaTareas.appendChild(li);
}
 
btnAgregar.addEventListener('click', function () {
    const texto = obtenerTextoTarea();
 
    if (texto === "") {
        return;
    }
 
    agregarTareaAlDOM(texto);
    actualizarContadores();
    limpiarInput();
});
 
function actualizarContadores() {
    const cantidadTareas = listaTareas.children.length;
    const completadas = document.querySelectorAll(".tarea.completada").length;
    const pendientes = cantidadTareas - completadas;
 
    totalTareas.textContent = cantidadTareas;
    tareasCompletadas.textContent = completadas;
    tareasPendientes.textContent = pendientes;
}
 
function vaciarLista() {
    listaTareas.innerHTML = "";
    actualizarContadores();
}
 
btnVaciar.addEventListener('click', function () {
    vaciarLista();
});