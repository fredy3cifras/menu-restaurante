document.addEventListener('DOMContentLoaded', function() {
    const categoryHeaders = document.querySelectorAll('.category h2');
    categoryHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const items = this.nextElementSibling;
            items.style.display = items.style.display === 'block' ? 'none' : 'block';
        });
    });

    const searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const items = document.querySelectorAll('.item');
        items.forEach(item => {
            const itemName = item.querySelector('h3').textContent.toLowerCase();
            if (itemName.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
