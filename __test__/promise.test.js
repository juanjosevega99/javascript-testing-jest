import { getDataFromApi } from "../promise";

describe("Test promises", () => {
  test("request to API", (done) => {
    const api = "https://rickandmortyapi.com/api/character/";
    getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});
