const sum = (a, b, ...others) => {
  const nums = [a, b, ...others]
    .map((n) => parseInt(n, 10))
    .filter((n) => !Number.isNaN(n));

  return nums.reduce((total, n) => total + n, 0);
};

export default sum;

// 1. add 2 numbers
// 2. add multiple numbers
// 3. handle edge cases
