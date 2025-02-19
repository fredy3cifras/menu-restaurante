document.addEventListener("DOMContentLoaded", function() {
    const categories = document.querySelectorAll('.category h2');
    
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryContent = category.nextElementSibling;
            categoryContent.classList.toggle('show');
        });
    });
});
