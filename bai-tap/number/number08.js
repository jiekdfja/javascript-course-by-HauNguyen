// NUMBER-08: Kiểm tra số có tổng chữ số chia hết cho 10
// Viết hàm isDivisibleBy10(n) để kiểm tra n (0 < n < 1000000) có tổng chữ số chia hết cho 10 hay không?
// Ví dụ:
// isDivisibleBy10(10) --> false
// isDivisibleBy10(1234) --> true vì 1 + 2 + 3 + 4 = 10 chia hết cho 10
// isDivisibleBy10(123455) --> true vì 1 + 2 + 3 + 4 + 5 + 5 = 20 chia hết cho 10

const isDivisibleBy10 = (n) => {
  if (n <= 0 || n >= 1000000) {
    return false;
  }

  let sumOfAllNumber = 0;

  const listOfNumber = String(n).split("");

  for (let i = 0; i < listOfNumber.length; i++) {
    sumOfAllNumber += Number(listOfNumber[i]);
  }

  if (sumOfAllNumber % 10 !== 0) {
    return false;
  }

  return true;
};

console.log(isDivisibleBy10(123455));
