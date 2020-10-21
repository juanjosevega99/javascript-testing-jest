// after each test
afterEach(() => console.log("after each test"));
afterAll(() => console.log("after all the tests"));

// before each test
beforeEach(() => console.log("before each tests"));
beforeAll(() => console.log("before all the tests"));

describe("prepare before run", () => {
  test("its true", () => {
    expect(true).toBeTruthy();
  });
});
