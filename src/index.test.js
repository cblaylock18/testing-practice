import { capitalize } from "./index.js";

describe("capitalize tests", () => {
  test("capitalize first letter of lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("capitalize first letter of lowercase string", () => {
    expect(capitalize("gOODBYE")).toBe("Goodbye");
  });

  test("capitalize first letter of lowercase string", () => {
    expect(capitalize("WazZuP")).toBe("Wazzup");
  });
});

describe("reverse string tests", () => {});
