const sumAll = function(a, b) {
  if (a > b) {
    [a, b] = [b, a];
  }

  if (isNaN(a) || isNaN(b) || !Number.isInteger(a) || !Number.isInteger(b)
    || a < 0 || b < 0) {
    return 'ERROR';
  }

  let sum = 0;

  for (i = a; i <= b; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
