import { capitalize, reverseString, calculator } from "./index.js";

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

describe("reverse string tests", () => {
  test("reverse a word", () => {
    expect(reverseString("backwards")).toBe("sdrawkcab");
  });
  test("reverse a phrase", () => {
    expect(reverseString("backwards is a word")).toBe("drow a si sdrawkcab");
  });
  test("reverse a phrase with odd capitalization", () => {
    expect(reverseString("bacKwards iS a word")).toBe("drow a Si sdrawKcab");
  });
});

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(1, 3)).toBeCloseTo(4);
  });
  test("subtract", () => {
    expect(calculator.sub(1, 3)).toBeCloseTo(-2);
  });
  test("multiply", () => {
    expect(calculator.mult(1, 3)).toBeCloseTo(3);
  });
  test("divide", () => {
    expect(calculator.div(1, 3)).toBeCloseTo(1 / 3);
  });
});
