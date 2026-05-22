// 1. Seleccionar el formulario y los campos
const formulario = document.querySelector('.formulario');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const telefono = document.querySelector('#telefono');
const mensaje = document.querySelector('#mensaje');

// 2. Escuchar el evento de 'submit' (enviar)
formulario.addEventListener('submit', function(e) {
    // ¡ESTA ES LA LÍNEA CLAVE! Evita que la página se recargue y se vaya hacia arriba
    e.preventDefault();

    // 3. Validar que los campos no estén vacíos
    if(nombre.value === '' || email.value === '' || telefono.value === '' || mensaje.value === '') {
        mostrarAlerta('Todos los campos son obligatorios', 'error');
        return; // Detiene la ejecución del código si hay un error
    }

    // 4. Si pasa la validación, mostrar mensaje de éxito
    mostrarAlerta('Formulario enviado correctamente', 'correcto');
    
    // Opcional: Limpiar los campos después de enviar con éxito
    formulario.reset();
});

// 5. Función para crear y mostrar las alertas en pantalla
function mostrarAlerta(mensajeTexto, clase) {
    // Evita que se dupliquen las alertas si el usuario da muchos clics
    const alertaPrevia = document.querySelector('.error, .correcto');
    if(alertaPrevia) {
        alertaPrevia.remove();
    }

    // Crear el elemento HTML de la alerta
    const alerta = document.createElement('P');
    alerta.textContent = mensajeTexto;
    alerta.classList.add(clase); // esto significa que pondra la clase 'error' o 'correcto' de tus estilos CSS

    // aqui se inserta la alerta dentro del formulario
    formulario.appendChild(alerta);

    // esto es para que la alerta desaparezca después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}