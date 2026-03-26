const alumno = document.getElementById('alumno');
const btnAgregar = document.getElementById('btnAgregar');
const btnVaciar = document.getElementById('btnVaciar');
const totalAlumnos = document.getElementById('totalAlumnos');
const alumnosCompletadas = document.getElementById('alumnosCompletadas');
const alumnosPendientes = document.getElementById('alumnosPendientes');
const listaAlumnos = document.getElementById('listaAlumnos');
 
function obtenerTextoAlumno() {
    return alumno.value.trim();
}
 
function limpiarInput() {
    alumno.value = "";
}
 
function agregarAlumnoAlDOM(texto) {
    const li = document.createElement("li");
    li.classList.add("alumno");
 
    const span = document.createElement("span");
    span.textContent = texto;
 
    const divAcciones = document.createElement("div");
    divAcciones.classList.add("acciones-alumno");
 
    const btnAsistir = document.createElement("button");
    btnAsistir.textContent = "Asiste";
    btnAsistir.classList.add("btn-accion", "btn-completar");

    const btnNoAsistir = document.createElement("button");
    btnNoAsistir.textContent = "No Asiste";
    btnNoAsistir.classList.add("btn-accion", "btn-pendiente");
 
    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "Borrar";
    btnBorrar.classList.add("btn-accion", "btn-eliminar");

    var asiste = false;
    var noAsiste = false;
 
    btnAsistir.addEventListener('click', function () {
        li.classList.toggle("completada");
        li.classList.toggle("alumno-asiste");
        
        if (!asiste) {
            asiste = true;
        } else {
            asiste = false;
        }

        if (noAsiste) {
            li.classList.toggle("pendiente");
            li.classList.toggle("alumno-noasiste");
            noAsiste = false;
        }
        actualizarContadores();
    });

    btnNoAsistir.addEventListener('click', function () {
        li.classList.toggle("pendiente");
        li.classList.toggle("alumno-noasiste");
        
        if (!noAsiste) {
            noAsiste = true;
        } else {
            noAsiste = false;
        }

        if (asiste) {
            li.classList.toggle("completada");
            li.classList.toggle("alumno-asiste");
            asiste = false;
        }
        actualizarContadores();
    });
 
    btnBorrar.addEventListener('click', function () {
        li.remove();
        actualizarContadores();
    });
 
    divAcciones.appendChild(btnAsistir);
    divAcciones.appendChild(btnNoAsistir);
    divAcciones.appendChild(btnBorrar);
 
    li.appendChild(span);
    li.appendChild(divAcciones);
    listaAlumnos.appendChild(li);
}
 
btnAgregar.addEventListener('click', function () {
    const texto = obtenerTextoAlumno();
 
    if (texto === "") {
        return;
    }
 
    agregarAlumnoAlDOM(texto);
    actualizarContadores();
    limpiarInput();
});

alumno.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        const texto = obtenerTextoAlumno();
    
        if (texto === "") {
            return;
        }
    
        agregarAlumnoAlDOM(texto);
        actualizarContadores();
        limpiarInput();
    }
})
 
function actualizarContadores() {
    const cantidadAlumnos = listaAlumnos.children.length;
    const completadas = document.querySelectorAll(".alumno.completada").length;
    const pendientes = document.querySelectorAll(".alumno.pendiente").length;
 
    totalAlumnos.textContent = cantidadAlumnos;
    alumnosCompletadas.textContent = completadas;
    alumnosPendientes.textContent = pendientes;
}
 
function vaciarLista() {
    listaAlumnos.innerHTML = "";
    actualizarContadores();
}
 
btnVaciar.addEventListener('click', function () {
    vaciarLista();
});