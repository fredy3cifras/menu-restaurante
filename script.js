document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");

    // Función para manejar la visualización de elementos de cada categoría
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling; // Los items que están debajo de cada categoría
            const isHidden = items.style.display === "grid" || items.style.display === ""; // Detectamos si están visibles o no
            items.style.display = isHidden ? "none" : "grid"; // Alternamos entre mostrar u ocultar
        });
    });

    // Función para filtrar los platos con la barra de búsqueda
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll(".menu-item");

        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            const description = item.querySelector("p") ? item.querySelector("p").textContent.toLowerCase() : '';

            // Si el nombre o la descripción contiene la consulta, lo mostramos; si no, lo ocultamos
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block"; // Mostrar el ítem si hay coincidencia
            } else {
                item.style.display = "none"; // Ocultar el ítem si no hay coincidencia
            }
        });
    });
});
