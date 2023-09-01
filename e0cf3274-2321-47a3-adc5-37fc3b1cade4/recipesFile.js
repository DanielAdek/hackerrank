const fs = require('fs');
const path = require('path');

const recipe_file = fs.readFileSync(path.resolve(__dirname, './recipes.json'), 'utf-8');

module.exports = JSON.parse(recipe_file);