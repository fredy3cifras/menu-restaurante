// Obtener todas las categorías
const categories = document.querySelectorAll('.category');

// Añadir evento de clic a cada título de categoría
categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const items = category.querySelector('.items');
    const button = document.createElement('button');
    button.textContent = 'Ver Más';

    // Estilo del botón "Ver Más" (azul con letras blancas)
    button.style.backgroundColor = '#007bff'; // Azul
    button.style.color = 'white';
    button.style.padding = '10px 20px'; // Espaciado interno
    button.style.border = 'none'; // Sin bordes
    button.style.borderRadius = '5px'; // Bordes redondeados
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.display = 'inline-block'; // No ocupa todo el ancho
    button.style.textAlign = 'center';
    button.style.width = 'auto';

    // Insertar el botón para expandir/colapsar
    categoryTitle.insertAdjacentElement('beforeend', button);

    // Manejo del clic para mostrar/ocultar los ítems
    button.addEventListener('click', () => {
        if (items.style.display === 'none' || items.style.display === '') {
            items.style.display = 'block';
            button.textContent = 'Ver Menos';
        } else {
            items.style.display = 'none';
            button.textContent = 'Ver Más';
        }
    });
});
