import { isNull, isTrue, isFalse, isUndefined } from "../true";

describe("test null results", () => {
  test("null", () => {
    expect(isNull()).toBeNull();
  });
});

describe("test true results", () => {
  test("true", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("test false results", () => {
  test("false", () => {
    expect(isFalse()).toBeFalsy;
  });
});

describe("test undefined result", () => {
  test("undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("test untrue results", () => {
  test("false o true", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
