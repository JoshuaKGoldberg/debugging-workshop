const { getRecipesAvailabilities } = require("./index.js");

const inventory = {
  coffee: 456,
  sweetener: 123,
};

describe("getRecipesAvailabilities", () => {
  it("returns an empty object when no recipes are requested", () => {
    const actual = getRecipesAvailabilities(inventory, {});

    expect(actual).toEqual({});
  });

  it("returns a single recipe's availabilities", () => {
    const actual = getRecipesAvailabilities(inventory, {
      coffeeBlack: {
        coffee: 8,
      },
    });

    expect(actual).toEqual({
      coffeeBlack: 57,
    });
  });

  it("returns multiple recipes' availabilities", () => {
    const actual = getRecipesAvailabilities(inventory, {
      coffeeBlack: {
        coffee: 8,
      },
      coffeeSweet: {
        coffee: 7,
        sweetener: 1,
      },
    });

    expect(actual).toEqual({
      coffeeBlack: 57,
      coffeeSweet: 65,
    });
  });
});
