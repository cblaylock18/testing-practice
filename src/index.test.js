import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index.js";

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
  //   future tests -> working with punctuation
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
  //   future tests -> working with punctuation
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
  //   future tests -> divide by 0, ensure inputs are numbers, etc.
});

describe("Caesar Cipher", () => {
  test("shifted message", () => {
    expect(caesarCipher("this is a test", 4)).toBe("xlmw mw e xiwx");
  });
  test("wrapping from z to a", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });
  test("case preservation", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("punctuation", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});

describe("Analyze Array", () => {
  test("first array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });
  test("second array", () => {
    expect(
      analyzeArray([
        9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24, 24, 25,
      ]),
    ).toEqual({
      average: 16.75,
      min: 9,
      max: 25,
      length: 16,
    });
  });
  test("array with negatives", () => {
    expect(
      analyzeArray([
        -25, -5, -3, -3, 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23, 24,
        24, 25,
      ]),
    ).toEqual({
      average: 11.6,
      min: -25,
      max: 25,
      length: 20,
    });
  });
  test("array with 0", () => {
    expect(
      analyzeArray([
        -25, -5, -3, -3, 0, 9, 10, 12, 13, 13, 13, 15, 15, 16, 16, 18, 22, 23,
        24, 24,
      ]),
    ).toEqual({
      average: 10.35,
      min: -25,
      max: 24,
      length: 20,
    });
  });
});
