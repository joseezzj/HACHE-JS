
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();

   
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const ciudad = document.getElementById('ciudad').value;

    
    const datos = {
        nombre: nombre,
        edad: edad,
        ciudad: ciudad
    };

 
    const datosJSON = JSON.stringify(datos);

    
    localStorage.setItem('datosGuardados', datosJSON);

    alert('Datos guardados en el almacenamiento local.');
});


document.getElementById('cargar').addEventListener('click', function() {
    
    const datosJSON = localStorage.getItem('datosGuardados');

    if (datosJSON) {
        
        const datos = JSON.parse(datosJSON);

       
        const datosDiv = document.getElementById('datos');
        datosDiv.innerHTML = `Nombre: ${datos.nombre}, Edad: ${datos.edad}, Ciudad: ${datos.ciudad}`;
    } else {
        alert('No se encontraron datos guardados.');
    }
});