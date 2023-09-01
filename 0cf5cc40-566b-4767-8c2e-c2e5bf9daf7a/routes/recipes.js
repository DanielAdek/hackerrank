var recipes = require('../recipes.json');
var router = require('express').Router();


router.get("/shopping-list", (req, res) => {
  if (!req.query.ids) {
    return res.status(400).send();
  }

  const ids = req.query.ids.split(",");

  let foundRecipes = [];

  for (const id of ids) {
    for (let i = 0; i < recipes.length; i++) {
      if (recipes[i].id === parseInt(id))
        foundRecipes.push(...recipes[i].ingredients);
    }
  }

  if (!foundRecipes.length)
    return res.status(404).send("NOT_FOUND");

  return res.status(200).send(foundRecipes);
});

module.exports = router;

