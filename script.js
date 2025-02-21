document.addEventListener('DOMContentLoaded', function () {
    // Funcionalidad para mostrar/ocultar el contenido de las categorías al hacer click
    const categories = document.querySelectorAll('.category h2');
    categories.forEach(category => {
        category.addEventListener('click', function () {
            const content = this.nextElementSibling;
            // Colapsamos o expandimos el contenido al hacer click
            content.classList.toggle('show');
        });
    });

    // Funcionalidad de búsqueda en el menú
    const searchInput = document.getElementById("search-bar"); // Buscamos el campo de búsqueda
    const menuItems = document.querySelectorAll(".menu-item"); // Seleccionamos todos los elementos del menú

    // Añadimos un evento de escucha para el campo de búsqueda
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase(); // Convertimos la búsqueda a minúsculas
        // Iteramos sobre los elementos del menú
        menuItems.forEach(item => {
            const itemName = item.querySelector("h3").textContent.toLowerCase(); // Obtenemos el nombre del ítem
            // Si el nombre del ítem coincide con la búsqueda, lo mostramos
            if (itemName.includes(searchTerm)) {
                item.style.display = "flex"; // Usamos "flex" en lugar de "block" para que mantenga el formato
            } else {
                item.style.display = "none"; // Si no coincide, lo ocultamos
            }
        });
    });
});
