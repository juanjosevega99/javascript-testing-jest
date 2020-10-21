import { numbers } from "../numbers";

describe("comparison of numbers", () => {
  test("greater than", () => {
    expect(numbers(2, 2)).toBeGreaterThan(3);
  });
  test("greater than or equal", () => {
    expect(numbers(2, 2)).toBeGreaterThanOrEqual(4);
  });
  test("less than", () => {
    expect(numbers(2, 2)).toBeLessThan(5);
  });
  test("less than or equal", () => {
    expect(numbers(2, 2)).toBeLessThanOrEqual(5);
  });
  test("floating numbers", () => {
    expect(numbers(0.2, 0.2)).toBeCloseTo(0.4);
  });
});
