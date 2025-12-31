document.addEventListener("DOMContentLoaded", () => {
  const recipeContainer = document.querySelector(".container");
  const tabs = document.querySelector(".tabs");
  const tabButtons = document.querySelectorAll(".tab-button");

  const renderRecipes = (recipeData) => {
    recipeContainer.innerHTML = ""; // Clear existing recipes

    recipeData.forEach((recipe) => {
      const recipeCard = document.createElement("div");
      recipeCard.classList.add("recipe-card");

      const header = document.createElement("div");
      header.classList.add("recipe-header");
      header.innerHTML = `
        <div class="header-left"><h2>${recipe.name}</h2></div>
        <div class="header-right">
          ${
            recipe.servings
              ? `<span class="servings">${recipe.servings}</span>`
              : ""
          }
          <span class="arrow" aria-hidden="true">▸</span>
        </div>
      `;

      const body = document.createElement("div");
      body.classList.add("recipe-body");

      let ingredientsList = "";
      recipe.ingredients.forEach((ingredient) => {
        ingredientsList += `<li>${ingredient}</li>`;
      });

      let directionsList = "";
      recipe.directions.forEach((direction) => {
        directionsList += `<li>${direction}</li>`;
      });

      let notesHTML = "";
      if (recipe.notes) {
        notesHTML = `<p class="notes">${recipe.notes}</p>`;
      }

      const imageHTML = recipe.image
        ? `<div class="image-wrapper"><img class="recipe-image" src="${recipe.image}" alt="${recipe.name}"></div>`
        : "";

      body.innerHTML = `${notesHTML}${imageHTML}<div class="recipe-content"><div class="ingredients"><h3>Ingredients</h3><ul>${ingredientsList}</ul></div><div class="directions"><h3>Directions</h3><ol>${directionsList}</ol></div></div>`;

      header.addEventListener("click", () => {
        const isOpen = body.classList.toggle("open");
        header.classList.toggle("open", isOpen);
        header.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });

      header.setAttribute("role", "button");
      header.setAttribute("aria-expanded", "false");

      recipeCard.appendChild(header);
      recipeCard.appendChild(body);
      recipeContainer.appendChild(recipeCard);
    });
  };

  tabs.addEventListener("click", (e) => {
    if (e.target.matches(".tab-button")) {
      tabButtons.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");

      const tab = e.target.getAttribute("data-tab");
      if (tab === "recipes") {
        renderRecipes(recipes);
      } else if (tab === "potential") {
        renderRecipes(potential_recipes);
      }
    }
  });

  // Initial render
  renderRecipes(recipes);
});
