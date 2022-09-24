const { isPossible } = require("./index.js");

const inventory = {
  coffee: 456,
  sweetener: 123,
};

describe("isPossible", () => {
  it("returns false when an inventory item is less than the requested amount", () => {
    const actual = isPossible(inventory, {
      coffee: 789,
    });

    expect(actual).toBe(false);
  });

  it("returns false when the first inventory item of several is less than the requested amount", () => {
    const actual = isPossible(inventory, {
      coffee: 123,
      sweetener: 123,
    });

    expect(actual).toBe(false);
  });

  it("returns false when the second inventory item of several is less than the requested amount", () => {
    const actual = isPossible(inventory, {
      coffee: 789,
      sweetener: 123,
    });

    expect(actual).toBe(false);
  });

  it("returns true when an inventory item is greater than or equal to than the requested amount", () => {
    const actual = isPossible(inventory, {
      coffee: 456,
    });

    expect(actual).toBe(true);
  });

  it("returns true when all inventory items are greater than or equal to than the requested amount", () => {
    const actual = isPossible(inventory, {
      coffee: 456,
      sweetener: 456,
    });

    expect(actual).toBe(true);
  });
});
