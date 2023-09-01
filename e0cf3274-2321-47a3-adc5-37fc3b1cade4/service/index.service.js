const recipedb = require('../recipesFile');

const getIndexOfNumberOrClosestNumber = (target, arr) => {
  let index = 0;
  let minDiff = Math.abs(target - arr[arr.length - 1]);

  for (const i in arr) {
    let diffPerEach = Math.abs(target - arr[i]);
    if (diffPerEach < minDiff) {
      minDiff = diffPerEach;
      index = i;
      break;
    }
  }
  return parseInt(index);
}

module.exports = {
   getRecipe: (params) => {
    try {
      const { elapsedTime, recipeId } = params;

      const findRecipe = recipedb.filter(r => r.id == recipeId);

      if (!findRecipe.length) {
        return { statusCode: 400, message: "NOT_FOUND"};
      }

      const index = getIndexOfNumberOrClosestNumber(elapsedTime, findRecipe[0]?.timers);

      return { index, statusCode: 200 };
    } catch(err) {
      return { statusCode: 500, message: err.message };
    }
  }
}