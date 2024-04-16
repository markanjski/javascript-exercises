const fibonacci = function (a) {
  let arr = [0, 1];
  if (typeof a !== "number") count = parseInt(a);
  else count = a;
  if (count < 0) return "OOPS";
  for (let i = 2; i <= count; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[count];
};

// Do not edit below this line
module.exports = fibonacci;
