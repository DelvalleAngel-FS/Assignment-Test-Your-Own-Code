//Function that takes an array of numbers and returns the sum of all elements.
function sumOfArray(arr) {
  return arr.reduce((accumulator, current) => accumulator + current, 0);
}
export { sumOfArray };
console.log(sumOfArray([10, 10, 15, 30]));

//Takes an array of numbers and returns the largest number
function findMax(arr) {
  return Math.max(...arr);
}
export { findMax };
console.log(findMax([20, 35, 10, 80, 65]));

//Reverses the input string and returns the reversed results
function reverseString(str) {
  return str.split(``).reverse().join(``);
}
// Example of function use
const result = reverseString("Amazing");
console.log(result);
export { reverseString };

//Accepts a string of words and returns a new version where each word is capitalized (only the first letter of each word).
function capitalizeWords(str) {
  return str
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(` `);
}
export { capitalizeWords };
console.log(capitalizeWords("hello world, how are we!"));
