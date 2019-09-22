import { toDate } from "../src";
import testsJSON from "./tests.json";
import assert from "assert";

describe("toDate", () => {
  testsJSON.forEach((t) => {
    it(t.name, () => {
      const result = toDate(t.input);
      console.log(t.input);
      console.log(result);
      console.log(t.comment);

      assert.equal(result ? result.toISOString() : null, t.output);
    });
  });
});
