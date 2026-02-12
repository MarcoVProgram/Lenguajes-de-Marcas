/*Estructura Esquema código:
    1. AddEventLister de recargar la página, funcion vacia, código a ejecutar despues
    2. Declaracion de Elementos
    3. Creación de un Array con los mensajes a almacenar
    4. Escuchar el boton submit
    5. Guardado de Input dentro del array
    6. Imprimir contenidos del Array, cada vez ejecutado, guardando en el caché
    7. Botón para cancelar (avanzado)
    8. Función a ejecutar vacía
*/

//Comienzo del Código
document.addEventListener('DOMContentLoaded', function() {
    //Verificación de que todo esté funcionando correctamente
    console.log('Este Script funciona');

    //Declaración de Constantes
    const messages = document.getElementById('messages');
    const taskList = document.getElementById('taskList');
    const taskInput = document.getElementById('taskInput');
    const taskForm = document.getElementById('taskForm');

    //Creación de Lista de Tareas
    let tasks = JSON.parse(messages.innerHTML);

    taskForm.addEventListener('submit', () => {
        console.log('El boton mensajes funciona correctamente');

        msg.textContent = 'test';
    });
});

//Ejemplos Listener Raton
/*document.addEventListener('auxclick')
document.addEventListener('click')
document.addEventListener('drag')
document.addEventListener('dragend')
document.addEventListener('dragover')
document.addEventListener('dragenter')
document.addEventListener('dragleave')
document.addEventListener('drop')
document.addEventListener('mousedown')
document.addEventListener('mouseenter')
document.addEventListener('mouseleave')
document.addEventListener('mousemove')
document.addEventListener('mouseover') <--
document.addEventListener('mouseup')
document.addEventListener('mouseout') <--
document.addEventListener('wheel')
document.addEventListener('pointerenter')
document.addEventListener('dblclick')
document.addEventListener('scroll')
document.addEventListener('scrollend')
document.addEventListener('pointercancel')
document.addEventListener('pointerdown')
document.addEventListener('pointerleave')
document.addEventListener('pointerlockchange')
document.addEventListener('pointerlockerror')
document.addEventListener('pointermove')
document.addEventListener('pointerout')
document.addEventListener('pointerover')
document.addEventListener('pointerup')
document.addEventListener('emptied')
document.addEventListener('select')
document.addEventListener('selectionchange')
document.addEventListener('selectstart')*/
