import { fizzBuzz } from "./main.js";

Deno.test("fizzBuzz returns expected values up to 15", () => {
  const expected = [
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ];

  if (JSON.stringify(fizzBuzz(15)) !== JSON.stringify(expected)) {
    throw new Error("fizzBuzz(15) did not return expected output");
  }
});

Deno.test("fizzBuzz returns empty array for zero", () => {
  if (JSON.stringify(fizzBuzz(0)) !== JSON.stringify([])) {
    throw new Error("fizzBuzz(0) should return []");
  }
});

Deno.test("fizzBuzz returns empty array for negative numbers", () => {
  if (JSON.stringify(fizzBuzz(-5)) !== JSON.stringify([])) {
    throw new Error("fizzBuzz(-5) should return []");
  }
});

Deno.test("fizzBuzz returns correct output for 5", () => {
  const expected = [1, 2, "Fizz", 4, "Buzz"];

  if (JSON.stringify(fizzBuzz(5)) !== JSON.stringify(expected)) {
    throw new Error("fizzBuzz(5) did not return expected output");
  }
});
