document.addEventListener('DOMContentLoaded', () => {
    // 1. Сортировка таблицы
    const table = document.querySelector('table tbody');
    const rows = Array.from(table.rows);
    rows.sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText, 'ru'));
    rows.forEach(row => table.appendChild(row));
    console.log('Таблица отсортирована!');

    // 2. Добавление нового текста
    const section2 = document.getElementById('section2');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'Это новый текст, добавленный с помощью JavaScript.';
    section2.appendChild(newParagraph);

    // 3. Отслеживание изменения размера окна
    window.addEventListener('resize', () => {
        alert(`Текущий размер окна: ${window.innerWidth}x${window.innerHeight}`);
    });
});