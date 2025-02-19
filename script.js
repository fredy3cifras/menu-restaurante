document.querySelectorAll('.category h2').forEach((header) => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('show');
    });
});
