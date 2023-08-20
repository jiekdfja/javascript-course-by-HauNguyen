// NUMBER-09: Kiểm tra số có tổng của 2 chữ số bằng số cho trước
// Viết hàm hasTwoDigitsWithSum(n, sum) để kiểm tra n (9 < n < 1000000) có chứa 2 chữ số bất kỳ nào có
// tổng bằng sum (0 < sum < 19) cho trước không?
// Ví dụ:
// hasTwoDigitsWithSum(10, 1) --> true vì 0 + 1 = 1
// hasTwoDigitsWithSum(101, 3) --> false vì không có 2 chữ số nào cộng lại bằng 3
// hasTwoDigitsWithSum(11, 2) --> true

const hasTwoDigitsWithSum = (n, x) => {
  if (n <= 9 || n >= 1000000) {
    return false;
  }

  if (x <= 0 || x >= 19) {
    return false;
  }

  let sumOfAllNumber = 0;

  const listOfNumber = String(n).split("");

  for (let i = 0; i < listOfNumber.length; i++) {
    sumOfAllNumber += Number(listOfNumber[i]);
  }

  if (sumOfAllNumber !== x) {
    return false;
  }

  return true;
};

console.log(hasTwoDigitsWithSum(11, 2));
