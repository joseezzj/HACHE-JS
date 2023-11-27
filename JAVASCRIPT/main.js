// Manejo de eventos al hacer clic en el botón "Cargar Datos"
document.getElementById('cargar').addEventListener('click', function() {
    // Hacer una solicitud a JSONPlaceholder (una API de prueba)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error de red: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Manipular los datos obtenidos y mostrarlos en el DOM
            const datosDiv = document.getElementById('datos');
            datosDiv.innerHTML = `Usuario ID: ${data.userId}, Título: ${data.title}, Completado: ${data.completed}`;
        })
        .catch(error => {
            console.error('Error al cargar datos desde la API:', error);
        });
});

// Manejo de eventos al hacer clic en el botón "Guardar Datos"
document.getElementById('guardar').addEventListener('click', function() {
    // Datos de ejemplo para guardar en el LocalStorage
    const datosEjemplo = {
        userId: 1,
        title: 'Tarea de ejemplo',
        completed: false
    };

    // Convertir el objeto a cadena JSON y almacenar en el LocalStorage
    localStorage.setItem('datosGuardados', JSON.stringify(datosEjemplo));

    alert('Datos guardados correctamente.');
});
