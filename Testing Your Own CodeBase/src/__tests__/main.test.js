import { sumOfArray } from "../main.js";
import { findMax } from "../main.js";
import { reverseString } from "../main.js";
import { capitalizeWords } from "../main.js";

describe(`findMax`, () => {
  test("returns the largest number in a standard array", () => {
    expect(findMax([1, 5, 3, 9, 2])).toBe(9);
  });
  test("Will produce if array has 1 element at 0", () => {
    expect(findMax([0])).toBe(0);
  });
  test("handles arrays with negative numbers", () => {
    expect(findMax([-10, -3, -5])).toBe(-3);
  });
});

describe(`sumOfArray`, () => {
  test("Adds all numbers in array together", () => {
    expect(sumOfArray([5, 10, 2, 3])).toEqual(20);
  });
  test("Works with negative numbers", () => {
    expect(sumOfArray([10, -3, -6, 6])).toEqual(7);
  });
});

describe(`reversedStrings`, () => {
  test("If input string is reveresed", () => {
    expect(reverseString("Animal")).toEqual("laminA");
  });
  test("If Input works on full string sentences", () => {
    expect(reverseString("Amazing moments in our life")).toEqual(
      "efil ruo ni stnemom gnizamA",
    );
  });
  test("handles an empty string", () => {
    expect(reverseString(``)).toBe(``);
  });
  test("handles strings with numbers and symbols", () => {
    expect(reverseString(`456*!`)).toBe(`!*654`);
  });
});

describe(`capitalizedWords`, () => {
  test("Capitalized first letter of each word", () => {
    expect(capitalizeWords("hello, how are you!")).toEqual(
      "Hello, How Are You!",
    );
  });
  test("returns an empty string if given an empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });
  test("Capitlized words stay the same", () => {
    expect(capitalizeWords("Good day To You hutz!")).toEqual(
      "Good Day To You Hutz!",
    );
  });
});
