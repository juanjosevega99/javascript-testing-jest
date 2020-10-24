import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("it is time for snapshots", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });

  test("fail snapshot", () => {
    const user = {
      id: Math.floor(Math.random() * 100),
      name: "Juan Jose Vega",
      headline: "Full Stack Developer",
      createdAt: new Date(),
    };

    expect(user).toMatchSnapshot({
      id: expect.any(Number),
      createdAt: expect.any(Date),
    });
  });

  test("we have an exception", () => {
    const user = {
      id: Math.floor(Math.random() * 20),
      name: "Juan Jose Vega",
    };
    expect(user).toMatchSnapshot({
      id: expect.any(Number),
    });
  });
});
