// script.js

// Obtener todas las categorías
const categories = document.querySelectorAll('.category');

// Añadir evento de clic a cada título de categoría
categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const items = category.querySelector('.items');
    const button = document.createElement('button');
    button.textContent = 'Ver Más';
    
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
