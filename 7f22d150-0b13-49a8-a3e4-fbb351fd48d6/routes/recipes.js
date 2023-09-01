var recipes = require('../recipes.json');
var router = require('express').Router();
const paginate = require("../pagination");

router.get("/", (req, res) => {
  let { page, limit } = req.query;
  const result = paginate(recipes, parseInt(page) || 0, parseInt(limit) || 3);
  return res.status(200).json(result.data);
});

module.exports = router;

