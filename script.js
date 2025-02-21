document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");

    // Manejo de la visibilidad de las categorías (expandir/colapsar)
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            items.style.display = items.style.display === "grid" ? "none" : "grid";
        });
    });

    // Manejo del evento de búsqueda
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll(".menu-item");

        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            const description = item.querySelector("p").textContent.toLowerCase();
            // Si el nombre o la descripción incluyen la búsqueda, mostrar el item
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block";  // Aseguramos que el elemento sea visible
            } else {
                item.style.display = "none";  // Ocultamos el elemento si no coincide
            }
        });
    });
});
