import { arrayFruits, arrayColors } from "../arrays";

describe("check that an element exists", () => {
  test("has a banana", () => {
    expect(arrayFruits()).toContain("apple");
  });
  test("does not have a strawberry", () => {
    expect(arrayFruits()).not.toContain("strawberry");
  });
  test("check the size of an array", () => {
    expect(arrayFruits()).toHaveLength(4);
  });
});
