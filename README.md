# Recipe Book Site

This is a simple frontend project to display a collection of recipes.

## Description

The project dynamically loads recipes from a JavaScript file (`recipes.js`) and displays them as cards on a webpage. It's built with plain HTML, CSS, and JavaScript.

## Getting Started

To view the site, simply open the `index.html` file in your web browser. There is no build process or server required.

## File Structure

- `index.html`: The main HTML file.
- `style.css`: Contains all the styles for the project.
- `recipes.js`: A JavaScript file containing an array of recipe objects.
- `potential_recipes.js`: A JavaScript file for storing recipe ideas that are not yet displayed.
- `script.js`: The JavaScript file that reads the recipes and dynamically creates the recipe cards.
- `images/`: A folder containing image files used by recipes (e.g. `garlic_bread.jpeg`, `bolognese.jpeg`). Images are referenced from `recipes.js` using relative paths like `images/garlic_bread.jpeg`.

## Notes on Images

- Images are included for some recipes and are rendered by `script.js` when present.
- Basic styling for images is provided in `style.css` under the `.recipe-image` and `.image-wrapper` rules to constrain size and provide spacing.

## Contributing

Feel free to fork the project and add your own recipes and images!
