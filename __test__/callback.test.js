import { callbackHell } from "../callback";

describe("Testing a callback", () => {
  test("Callback", (done) => {
    function otherCallback(data) {
      expect(data).toBe("Hi JavaScript");
      done();
    }
    callbackHell(otherCallback);
  });
});
