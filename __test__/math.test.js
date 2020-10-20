import { add, subtract, multiply, divide } from "../math";

describe("mathematical calculations", () => {
  test("addition test", () => {
    expect(add(1, 1)).toBe(2);
  });
  test("subtract test", () => {
    expect(subtract(3, 1)).toBe(2);
  });
  test("multiply test", () => {
    expect(multiply(2, 2)).toBe(4);
  });
  test("multiply test", () => {
    expect(divide(2, 2)).toBe(1);
  });
});
