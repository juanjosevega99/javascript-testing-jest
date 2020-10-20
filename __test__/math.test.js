import { add, subtract, multiply, divide } from "../math";

describe("mathematical calculations", () => {
  test("addition test", () => {
    expect(add(1, 1)).toBe(2);
  });
});
