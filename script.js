document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.category');

    categories.forEach(function (category) {
        category.addEventListener('click', function () {
            const content = category.nextElementSibling;
            content.classList.toggle('show');
        });
    });
});
