const sum = (a, b, ...others) =>
  [a, b, ...others].reduce((total, n) => total + n, 0);

export default sum;

// 1. add 2 numbers
// 2. add multiple numbers
// 3. handle edge cases
