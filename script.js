document.addEventListener('DOMContentLoaded', function() {
    const carDetails = {
        'car1': 'Detalles del Auto 1: Este auto es increíble y tiene características impresionantes.',
        'car2': 'Detalles del Auto 2: Este auto es rápido y elegante, perfecto para cualquier ocasión.',
        'car3': 'Detalles del Auto 3: Este auto combina lujo y rendimiento a la perfección.'
    };

    document.querySelectorAll('.car').forEach(car => {
        car.addEventListener('click', function() {
            const carId = this.getAttribute('data-car');
            document.querySelector('.details-content').innerText = carDetails[carId];
            document.querySelector('.car-details').style.display = 'block';
        });
    });

    document.querySelector('.close-button').addEventListener('click', function() {
        document.querySelector('.car-details').style.display = 'none';
    });

    // Opcional: Manejo del envío del formulario
    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado con éxito!');
    });
});
