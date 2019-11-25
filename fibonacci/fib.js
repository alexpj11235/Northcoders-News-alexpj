let fibArr = [1, 1];

let fib = n => {
  if (n <= 1) {
    return 1;
  } else {
    return fibArr[n - 1] + fibArr[n - 2];
  }
};

for (let i = 1; i < 100; i++) {
  if (!fibArr[i]) {
    fibArr.push(fib(i));
  }
}
for (let i = 0; i < fibArr.length; i++) {
  console.log(fibArr[i]);
}
