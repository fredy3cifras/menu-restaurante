// Mostrar y ocultar el contenido de cada categoría
const categories = document.querySelectorAll('.category h2');

categories.forEach(category => {
    category.addEventListener('click', () => {
        const content = category.nextElementSibling;
        content.classList.toggle('show');
    });
});
