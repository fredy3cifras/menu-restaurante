document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");

    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            items.style.display = items.style.display === "grid" ? "none" : "grid";
        });
    });

    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll(".menu-item");

        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();
            const description = item.querySelector("p").textContent.toLowerCase();
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});
