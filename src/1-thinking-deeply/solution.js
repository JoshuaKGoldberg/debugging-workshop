module.exports.isPossible = function isPossible(inventory, recipe) {
  for (const [ingredient, amount] of Object.entries(recipe)) {
    if (inventory[ingredient] < amount) {
      return false;
    }
  }

  return true;
};
