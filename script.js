// JavaScript para desplegar el contenido de cada sección
document.addEventListener("DOMContentLoaded", function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(category => {
        const header = category.querySelector('h2');
        const content = category.querySelector('.category-content');

        header.addEventListener('click', () => {
            content.classList.toggle('show');
        });
    });
});
