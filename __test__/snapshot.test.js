import { getCharacter } from "../snapshot";
import rick from "../rick.json";

describe("it is time for snapshots", () => {
  test("Snapshot", () => {
    expect(getCharacter(rick)).toMatchSnapshot();
  });
});
