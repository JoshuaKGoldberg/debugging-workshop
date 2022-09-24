const { isPossible } = require("./index.js");

const inventory = {
  coffee: 456,
  sweetener: 123,
};

describe("isPossible", () => {
  it("returns false when the recipe does not exist", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 789,
        },
      },
      "myLeastFavoriteDrink"
    );

    expect(actual).toBe(false);
  });

  it("returns false when an inventory item is less than the requested amount", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 789,
        },
      },
      "myFavoriteDrink"
    );

    expect(actual).toBe(false);
  });

  it("returns false when the first inventory item of several is less than the requested amount", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 789,
          sweetener: 123,
        },
      },
      "myFavoriteDrink"
    );

    expect(actual).toBe(false);
  });

  it("returns false when the second inventory item of several is less than the requested amount", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 789,
          sweetener: 123,
        },
      },
      "myFavoriteDrink"
    );

    expect(actual).toBe(false);
  });

  it("returns true when an inventory item is greater than or equal to than the requested amount", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 456,
        },
      },
      "myFavoriteDrink"
    );

    expect(actual).toBe(true);
  });

  it("returns true when all inventory items are greater than or equal to than the requested amount", () => {
    const actual = isPossible(
      inventory,
      {
        myFavoriteDrink: {
          coffee: 456,
          sweetener: 456,
        },
      },
      "myFavoriteDrink"
    );

    expect(actual).toBe(true);
  });
});
