//Creacion de constante con todos los links internos de la pagina (los botones del nav a la izquierda)
const links = document.querySelectorAll('.nav-link');
//Listado de las secciones, tanto las ocultas como las visibles
const secciones = document.querySelectorAll('.section-active, .section-disabled');

//Logica de selección de secciones
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); //Evita el salto automático, por si llegase a suceder

        //Se toma el atributo de destino, tomando de referencia el actual seleccionado en la pagina
        const destino = this.getAttribute('href').substring(1); 
        //Se crea su objeto correspondiente, importante asegurar que corresponda id y href
        const seccionDestino = document.getElementById(destino);

        //Ocultar todas las secciones
        secciones.forEach(seccion => {
            seccion.classList.remove('section-active');
            seccion.classList.add('section-disabled');
        });

        //Quitar clase activa de todos los links
        links.forEach(l => {
            l.classList.remove('nav-link-active');
        });

        // Muestra visible de la seccion actual
        seccionDestino.classList.remove('section-disabled');
        seccionDestino.classList.add('section-active');

        //Marcado del link actual, usando this, que representa al link
        this.classList.add('nav-link-active');
    });
});

//Logica de añadir libro a la colección
const addBookButton = document.getElementById('addBookButton');//Boton de añadir libro
const titleInput = document.getElementById('nameInput');//Input nombre libro
const authorInput = document.getElementById('autorInput');//Input autor libro
const isbnInput = document.getElementById('isbnInput');//Input ISBN libro
const collectionInput = document.getElementById('categoriaInput');//Input categoría libro

//Funcion LeerDato
function leerTexto(input) {
    return input.value.trim();
};

//Funciones de validación de datos
function validarTitulo() {

    const titulo = leerTexto(titleInput);//Leemos el titulo del libro

    const regexTitulo = /^[a-zA-Z0-9\s]+$/; // Permite letras, números y espacios
    if (!regexTitulo.test(titulo)) {
        alert('El título solo puede contener letras, números y espacios.');
        return false;
    }

    if (titulo === '') {
        alert('El título no puede estar vacío.');
        return false;
    }

    return true;
}

function validarAutor() {

    const autor = leerTexto(authorInput);//Leemos el autor del libro

    const regexAutor = /^[a-z][a-z\s]{1,29}$/i; // Permite letras y espacios, con una longitud de 2 a 30 caracteres, ignora mayúsculas/minúsculas
    if (!regexAutor.test(autor)) {
        alert('El autor solo puede contener letras y espacios, con una longitud de 2 a 30 caracteres.');
        return false;
    }

    return true;
}

function validarISBN() {

    const isbn = leerTexto(isbnInput);//Leemos el ISBN del libro
    const regexISBN = /^(\d{13})$/; // Permite exactamente 13 dígitos numéricos
    if (!regexISBN.test(isbn)) {
        alert('El ISBN debe contener exactamente 13 dígitos numéricos.');
        return false;
    }

    return true;
}

function validarCategoria() {
    const categoria = leerTexto(collectionInput);//Leemos la categoría del libro
    const regexCategoria = /^[a-zA-Z0-9\s]+$/; // Permite letras, números y espacios

    if (!regexCategoria.test(categoria)) {
        alert('La categoría solo puede contener letras, números y espacios.');
        return false;
    }

    if (categoria === '') {
        alert('La categoría no puede estar vacía.');
        return false;
    }
    return true;
}

function validarFormulario() {
    return validarTitulo() && validarAutor() && validarISBN() && validarCategoria();
}


const bookList = document.getElementById('bookList'); // Contenedor para la lista de libros

//Comprobación de existencia de libro por ISBN, para evitar duplicados
function libroExistente(isbn) {
    const libros = document.querySelectorAll('#bookList .book-item');
    for (const libro of libros) {
        if (libro.getAttribute('data-isbn') === isbn) {
            return true;
        }
    }
    return false;
}

addBookButton.addEventListener('click', function() {

    //Constantes
    const titulo = leerTexto(titleInput);
    const autor = leerTexto(authorInput);
    const isbn = leerTexto(isbnInput);
    const categoria = leerTexto(collectionInput);

    const existe = libroExistente(isbn);

    //No existe preocupacion de que el ISBN sea valido si no es un patron, no se encontrará
    if (existe) {
        alert('Ya existe un libro con ese ISBN en la colección.');
        return;
    }

    if (validarFormulario() && !existe) {
        alert('Libro agregado correctamente a la colección.');

        //Crear un nuevo elemento de libro
        const bookItem = document.createElement('li');
        bookItem.classList.add('book-item');
        bookItem.textContent = `Título: ${titulo}\nAutor: ${autor}\nISBN: ${isbn}\nCategoría: ${categoria}`;
        bookItem.setAttribute('data-isbn', isbn);//Atributo para identificar el libro por su ISBN, útil para evitar duplicados y futuras funcionalidades
        bookItem.setAttribute('data-titulo', titulo);//Atributo para identificar el libro por su título, útil para funcionalidades de busqueda
        bookItem.setAttribute('data-autor', autor);//Atributo para identificar el libro por su autor, útil para funcionalidades de busqueda
        bookItem.setAttribute('data-categoria', categoria);//Atributo para identificar el libro por su categoría, útil para funcionalidades de busqueda

        //Creacion de estado
        const span = document.createElement("span");
        span.textContent = "Disponible";

        //Creacion de boton de alquilar/devolver
        const divAcciones = document.createElement("div");

        divAcciones.classList.add("actions-book");
    
        const btnAlquilar = document.createElement("button");
        btnAlquilar.textContent = "Alquilar";
        btnAlquilar.classList.add("btn-accion", "btn-completar");

        //Alternancia entre alquilar y devolver, cambiando el estado del libro
        btnAlquilar.addEventListener("click", function() {
            bookItem.classList.toggle("book-rented");
            if (bookItem.classList.contains("book-rented")) {
                btnAlquilar.textContent = "Devolver";
                span.textContent = "Alquilado";
            } else {
                btnAlquilar.textContent = "Alquilar";
                span.textContent = "Disponible";
            }
        });

        divAcciones.appendChild(btnAlquilar);
        bookItem.appendChild(divAcciones);
        bookItem.appendChild(span);
        bookList.appendChild(bookItem);
    }
});

//Lógica de búsqueda de libros por título, isbn, autor o categoría
const searchInput = document.getElementById('searchInput');
const searchMethod = document.getElementById('searchMethod');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', function(e) {
    e.preventDefault();

    const termino = searchInput.value.trim().toLowerCase();
    const metodo = searchMethod.value;
    const libros = document.querySelectorAll('#bookList .book-item');//Asegurarse que no se repitan datos

    searchResults.innerHTML = '';//Limpiar resultados anteriores

    let resultadosEncontrados = 0;


    //Busqueda en cada libro
    libros.forEach(libro => {
        const textoLibro = libro.textContent.toLowerCase();

        let coincide = false;

        if (metodo === 'titulo' && textoLibro.includes(`título: ${termino}`)) {
            coincide = true;
        }

        if (metodo === 'autor' && textoLibro.includes(`autor: ${termino}`)) {
            coincide = true;
        }

        if (metodo === 'isbn' && textoLibro.includes(`isbn: ${termino}`)) {
            coincide = true;
        }

        if (metodo === 'categoria' && textoLibro.includes(`categoría: ${termino}`)) {
            coincide = true;
        }

        if (coincide) {
            const resultado = document.createElement('li');
            resultado.classList.add('book-item');
            resultado.textContent = libro.textContent;
            resultado.textContent = libro.textContent;

            //Copiar los atributos data del libro original
            resultado.setAttribute('data-isbn', libro.getAttribute('data-isbn'));
            resultado.setAttribute('data-titulo', libro.getAttribute('data-titulo'));
            resultado.setAttribute('data-autor', libro.getAttribute('data-autor'));
            resultado.setAttribute('data-categoria', libro.getAttribute('data-categoria'));

            //Copiar la clase de estado si existe
            if (libro.classList.contains('book-rented')) {
                resultado.classList.add('book-rented');
            }

            //Copiar los elementos internos (botón y estado)
            resultado.innerHTML = libro.innerHTML;

            //Asignar funcionalidad al botón del resultado
            const btnAlquilarResultado = resultado.querySelector('.btn-completar');
            btnAlquilarResultado.addEventListener('click', function() {
                resultado.classList.toggle('book-rented');
                if (resultado.classList.contains('book-rented')) {
                    btnAlquilarResultado.textContent = 'Devolver';
                    resultado.querySelector('span').textContent = 'Alquilado';
                } else {
                    btnAlquilarResultado.textContent = 'Alquilar';
                    resultado.querySelector('span').textContent = 'Disponible';
                }
            });
            searchResults.appendChild(resultado);
            resultadosEncontrados++;
        }
    });

    //Si no se encontraron resultados, mostrar mensaje
    if (resultadosEncontrados === 0) {
        const resultado = document.createElement('li');
        resultado.textContent = 'No se encontraron resultados.';
        searchResults.appendChild(resultado);
    }
});