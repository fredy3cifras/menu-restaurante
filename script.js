document.addEventListener('DOMContentLoaded', () => {
    const categoryHeaders = document.querySelectorAll('.category-header');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'none' || content.style.display === '' ? 'block' : 'none';
        });
    });

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', (e) => {
        const searchText = e.target.value.toLowerCase();
        const menuItems = document.querySelectorAll('.menu-item');

        menuItems.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            item.style.display = itemName.includes(searchText) ? 'flex' : 'none';
        });
    });
});
