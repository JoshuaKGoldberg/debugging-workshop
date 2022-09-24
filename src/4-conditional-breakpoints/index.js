module.exports.getRecipesAvailabilities = function getRecipesAvailabilities(
  inventory,
  recipes
) {
  const availabilities = {};

  for (const [recipe, ingredients] of Object.entries(recipes)) {
    availabilities[recipe] = getRecipeAvailability(
      { ...inventory },
      ingredients
    );
  }

  return availabilities;
};

function getRecipeAvailability(remainingInventory, ingredients) {
  let availability = 0;

  while (true) {
    for (const [ingredient, amount] of Object.entries(ingredients)) {
      remainingInventory[ingredient] -= amount;
      if (remainingInventory[ingredient] < 0) {
        return availability;
      }
    }

    availability += 1;
  }
}
