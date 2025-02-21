document.addEventListener("DOMContentLoaded", () => {
    const categories = document.querySelectorAll(".menu-category h2");
    const searchBar = document.getElementById("searchBar");
    let autoCollapseTimer;

    // Function to collapse all categories
    const collapseAllCategories = () => {
        const items = document.querySelectorAll(".menu-items");
        items.forEach(item => {
            item.style.display = "none";
        });
    };

    // Function to reset the auto-collapse timer
    const resetAutoCollapseTimer = () => {
        clearTimeout(autoCollapseTimer);
        autoCollapseTimer = setTimeout(collapseAllCategories, 300000); // 5 minutes (300,000 milliseconds)
    };

    // Show and hide category items on click (manual collapse)
    categories.forEach(category => {
        category.addEventListener("click", () => {
            const items = category.nextElementSibling;
            if (items.style.display === "none" || items.style.display === "") {
                items.style.display = "grid";  // Show items on click
            } else {
                items.style.display = "none";  // Hide items on click
            }
            resetAutoCollapseTimer(); // Reset the timer on user interaction
        });
    });

    // Filter items as the user types in the search bar
    searchBar.addEventListener("input", () => {
        const query = searchBar.value.toLowerCase();  // Get the search value
        const items = document.querySelectorAll(".menu-item");

        // Iterate through all the items
        items.forEach(item => {
            const name = item.querySelector("h3").textContent.toLowerCase();  // Item name
            const description = item.querySelector("p").textContent.toLowerCase();  // Item description

            // Check if the name or description contains the search term
            if (name.includes(query) || description.includes(query)) {
                item.style.display = "block";  // Show item if it matches the search
                // Show the category if it's not visible
                const category = item.closest(".menu-items");
                if (category.style.display === "none" || category.style.display === "") {
                    category.style.display = "grid";
                }
            } else {
                item.style.display = "none";  // Hide item if it does not match the search
            }
        });
        resetAutoCollapseTimer(); // Reset the timer on user interaction
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
        resetAutoCollapseTimer(); // Reset the timer on user interaction
    });

    // Initial timer setup
    resetAutoCollapseTimer();
});
