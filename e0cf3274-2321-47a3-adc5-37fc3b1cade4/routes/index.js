var express = require('express');
var router = express.Router();
const recipeRoutes = require("./recipes");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('<p>HTML Data</p>');
});

router.use("/recipes", recipeRoutes);

module.exports = router;
