document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");

    // Mostrar y ocultar los ítems de las categorías al hacer clic
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            if (items.style.display === "none" || items.style.display === "") {
                items.style.display = "grid";  // Mostrar ítems
            } else {
                items.style.display = "none";  // Ocultar ítems
            }
        });
    });

    // Filtrar elementos al escribir en el buscador
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();  // Obtener el valor de la búsqueda
        const items = document.querySelectorAll(".menu-item");

        // Recorremos todos los platos
        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();  // Nombre del plato
            const description = item.querySelector("p").textContent.toLowerCase();  // Descripción del plato

            // Verificar si el nombre o la descripción contienen el término de búsqueda
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block";  // Mostrar el plato que coincide con la búsqueda
                // Mostrar la categoría si no está visible
                const category = item.closest(".menu-items");
                if (category.style.display === "none" || category.style.display === "") {
                    category.style.display = "grid";
                }
            } else {
                item.style.display = "none";  // Ocultar el plato si no coincide
            }
        });
    });

    // Handle form submission using EmailJS
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent the page from refreshing

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        emailjs.send("service_3lwc9xm", "template_k2qrxlh", {
            name: name,
            email: email,
            message: message
        })
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contact-form").reset();  // Reset the form after sending
        }, function(error) {
            alert("Failed to send the message, please try again.");
        });
    });
});
