document.addEventListener('DOMContentLoaded', () => {
    const recipeContainer = document.querySelector('.container');

    recipes.forEach(recipe => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');

        let ingredientsList = '';
        recipe.ingredients.forEach(ingredient => {
            ingredientsList += `<li>${ingredient}</li>`;
        });

        let directionsList = '';
        recipe.directions.forEach(direction => {
            directionsList += `<li>${direction}</li>`;
        });

        let notesHTML = '';
        if (recipe.notes) {
            notesHTML = `<p class="notes">${recipe.notes}</p>`;
        }

        recipeCard.innerHTML = `
            <h2>${recipe.name} ${recipe.servings ? `- ${recipe.servings}` : ''}</h2>
            ${notesHTML}
            <div class="recipe-content">
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        ${ingredientsList}
                    </ul>
                </div>
                <div class="directions">
                    <h3>Directions</h3>
                    <ol>
                        ${directionsList}
                    </ol>
                </div>
            </div>
        `;

        recipeContainer.appendChild(recipeCard);
    });
});
