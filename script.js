document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.menu-category h2');
    const searchBar = document.getElementById('searchBar');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const menuItems = header.nextElementSibling.querySelectorAll('.menu-item');
            menuItems.forEach(item => item.style.display = item.style.display === 'block' ? 'none' : 'block');
        });
    });

    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });

        headers.forEach(header => {
            const category = header.nextElementSibling;
            const visibleItems = category.querySelectorAll('.menu-item[style*="block"]');
            if (visibleItems.length > 0) {
                category.style.display = 'block';
            } else {
                category.style.display = 'none';
            }
        });
    });
});
