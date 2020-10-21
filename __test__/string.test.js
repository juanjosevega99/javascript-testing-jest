describe("check text strings", () => {
  const text = "the result of query";

  test("must content the following text", () => {
    expect(text).toMatch(/query/);
  });
  test("does not contain the following text", () => {
    expect(text).not.toMatch(/endpoint/);
  });
  test("check the size of a string", () => {
    expect(text).toHaveLength(19);
  });
});
