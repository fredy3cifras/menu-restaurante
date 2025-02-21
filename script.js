// script.js

// Obtener todas las categorías
const categories = document.querySelectorAll('.category');

// Añadir evento de clic a cada título de categoría
categories.forEach(category => {
    const categoryTitle = category.querySelector('h2');
    const items = category.querySelector('.items');
    
    // Establecer inicialmente que los ítems estén ocultos
    items.style.display = 'none';

    // Establecer el estilo del título de la categoría
    categoryTitle.style.color = '#007bff';  // Azul para el título

    // Insertar un div con un contenedor para el título y los elementos
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('category-title-container');
    categoryTitle.insertAdjacentElement('beforebegin', titleContainer);
    titleContainer.appendChild(categoryTitle);

    // Crear botón de "Ver Más" y asignar estilos
    const button = document.createElement('button');
    button.textContent = 'Ver Más';
    button.classList.add('toggle-button');
    button.style.backgroundColor = '#007bff'; // Azul
    button.style.color = 'white';
    button.style.padding = '10px 20px';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';
    button.style.display = 'inline-block'; // No ocupa todo el ancho
    button.style.textAlign = 'center';
    button.style.width = 'auto';

    // Insertar el botón para expandir/colapsar al lado del título
    titleContainer.appendChild(button);

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

    // Detectar el cambio en el tamaño de la ventana para ajustar el estilo de la categoría
    window.addEventListener('resize', () => {
        // Cuando la ventana esté pequeña, ocultamos el botón "Ver Más"
        if (window.innerWidth <= 768) {
            button.style.display = 'none'; // Ocultar el botón
            items.style.display = 'block'; // Mostrar los ítems de forma predeterminada
        } else {
            button.style.display = 'inline-block'; // Mostrar el botón nuevamente
            items.style.display = 'none'; // Ocultar los ítems inicialmente
        }
    });

    // Inicialización del comportamiento en función del tamaño de la ventana
    if (window.innerWidth <= 768) {
        button.style.display = 'none'; // Ocultar el botón por defecto en pantallas pequeñas
        items.style.display = 'block'; // Mostrar los ítems
    } else {
        button.style.display = 'inline-block'; // Mostrar el botón en pantallas grandes
        items.style.display = 'none'; // Los ítems están ocultos por defecto
    }
});
