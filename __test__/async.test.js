import { getDataFromApi } from "../promise";
import "@babel/polyfill";

describe("Test Async/Await", () => {
  test("Request to an API", async () => {
    const api = "https://rickandmortyapi.com/api/character/";
    const getRick = "https://rickandmortyapi.com/api/character/1";

    await getDataFromApi(api).then((data) => {
      expect(data.results.length).toBeGreaterThan(0);
    });

    await getDataFromApi(getRick).then((data) => {
      expect(data.name).toEqual("Rick Sanchez");
    });

    const data = await getDataFromApi(api);
    expect(data.results.length).toBeGreaterThanOrEqual(0);

    const data2 = await getDataFromApi(getRick);
    expect(data2.name).toEqual("Rick Sanchez");
  });

  test("Request to an API with error", async () => {
    const apiError = "http://httpstat.us/404";
    const request = getDataFromApi(apiError);
    await expect(request).rejects.toEqual(
      Error("Request failed with status code 404")
    );
  });

  test("Resolve a Hello", async () => {
    await expect(Promise.resolve("Hello")).resolves.toBe("Hello");
    await expect(Promise.reject("Error")).rejects.toBe("Error");
  });

  test("Resolve with try and catch", async () => {
    try {
      await getDataFromApi(`http://httpstat.us/500`);
    } catch (error) {
      expect(error).toEqual(new Error("Request failed with status code 500"));
    }
  });
});
