module.exports.isPossible = function isPossible(inventory, recipes, recipe) {
  const requirements = recipes[recipe];
  if (!requirements) {
    return false;
  }

  for (const [ingredient, amount] of Object.entries(requirements)) {
    return inventory[ingredient] > amount;
  }

  return true;
};
