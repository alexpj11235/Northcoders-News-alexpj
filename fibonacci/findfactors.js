let calculateFactors = n => {
  let factors = [];
  for (let i = 2; i < n ** (1 / 2); i++) {
    if (n % i === 0) {
      factors.push([i, n / i]);
    }
  }
  return factors;
};

console.log(calculateFactors(900000000000000000));
