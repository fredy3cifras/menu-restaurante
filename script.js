document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.menu-category h2');
    const searchBar = document.getElementById('search-bar');

    categories.forEach(category => {
        category.addEventListener('click', () => {
            const items = category.nextElementSibling;
            items.style.display = (items.style.display === 'none' || !items.style.display) ? 'block' : 'none';
        });
    });

    searchBar.addEventListener('keyup', () => {
        const query = searchBar.value.toLowerCase();
        const items = document.querySelectorAll('.menu-item');

        items.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
