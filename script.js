ddocument.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");

    // Mostrar y ocultar los ítems de las categorías al hacer clic
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            items.style.display = items.style.display === "grid" ? "none" : "grid";
        });
    });

    // Filtrar elementos al escribir en el buscador
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll(".menu-item");

        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            const description = item.querySelector("p").textContent.toLowerCase();
            
            // Verificar si el nombre o la descripción incluyen la consulta
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block";  // Mostrar el ítem si coincide
            } else {
                item.style.display = "none";  // Ocultar el ítem si no coincide
            }
        });
    });
});
