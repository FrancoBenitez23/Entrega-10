function addCategory() {
    const categories = document.getElementById('categories');
    const newCategory = document.createElement('div');
    newCategory.className = 'category';
    newCategory.innerHTML = `
        <input type="text" value="Nueva Categoría" class="category-name">
        <input type="number" value="0" class="category-percent">%
    `;
    categories.appendChild(newCategory);
}

function calculateBudget() {
    const income = parseFloat(document.getElementById('income').value);
    if (isNaN(income) || income <= 0) {
        alert('Por favor, ingresa un monto válido para los ingresos.');
        return;
    }

    const categories = document.querySelectorAll('.category');
    let totalPercent = 0;
    categories.forEach(category => {
        totalPercent += parseFloat(category.querySelector('.category-percent').value);
    });

    if (totalPercent !== 100) {
        alert('Los porcentajes deben sumar 100%.');
        return;
    }

    const results = document.getElementById('results');
    results.innerHTML = '';

    categories.forEach(category => {
        const categoryName = category.querySelector('.category-name').value;
        const categoryPercent = parseFloat(category.querySelector('.category-percent').value);
        const categoryAmount = (income * categoryPercent) / 100;
        results.innerHTML += `<p>${categoryName}: $${categoryAmount.toFixed(2)}</p>`;
    });
}
