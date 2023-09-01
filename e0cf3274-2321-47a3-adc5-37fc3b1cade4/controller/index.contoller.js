const service = require("../service/index.service");

const getRecipe = (req, res) => {
  const result = service.getRecipe({elapsedTime: parseInt(req.query.elapsedTime), recipeId: parseInt(req.params.id) });
  if (result.statusCode !== 200) return res.status(result.statusCode).send(result.message);
  return res.status(result.statusCode).send({ index : result.index });
}

module.exports = getRecipe;