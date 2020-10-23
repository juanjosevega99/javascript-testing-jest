import { getDataFromApi } from "../promise";

describe("Test promises", () => {
  test("request to API", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test("Resolve Hi", () => {
    return expect(Promise.resolve("Hi")).resolves.toBe("Hi");
  });

  test("Reject with an error", () => {
    return expect(Promise.reject("Error")).rejects.toBe("Error");
  });

  test("Reject with an error / second way", () => {
    return expect(Promise.reject(new Error("Error"))).rejects.toThrow("Error");
  });
});
