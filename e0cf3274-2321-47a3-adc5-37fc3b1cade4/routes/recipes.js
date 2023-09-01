var recipes = require('../recipes.json');
var router = require('express').Router();
const recipeController = require("../controller/index.contoller");

router.get("/step/:id", recipeController)

module.exports = router;

