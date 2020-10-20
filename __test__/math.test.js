import { add, subtract, multiply, divide } from "../math";

describe("mathematical calculations", () => {
  test("addition test", () => {
    expect(add(1, 1)).toBe(2);
  });
  test("multiply test", () => {
    expect(add(2, 2)).toBe(4);
  });
});
