describe("Common Comparators", () => {
  const user = {
    name: "Juan",
    lastName: "Vega",
  };
  const user2 = {
    name: "Juan",
    lastName: "Vega",
  };

  test("equality of elements", () => {
    expect(user).toEqual(user2);
  });

  test("element inequality", () => {
    expect(user).not.toEqual(user2);
  });
});
