module.exports.isPossible = function isPossible(inventory, recipe) {
  for (const [ingredient, amount] of Object.entries(recipe)) {
    return inventory[ingredient] >= amount;
  }

  return true;
};
