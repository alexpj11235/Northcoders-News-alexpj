let findPrimes = x => {
  let Plist = [];
  for (let i = 2; i < x; i++) {
    let list = [];
    for (let j = 2; j <= i ** (1 / 2); j++) {
      if (i % j === 0) {
        list.push(j);
      }
    }
    if (list.length === 0) {
      Plist.push(i);
    }
  }
  return Plist;
};

const primes = findPrimes(2000);
