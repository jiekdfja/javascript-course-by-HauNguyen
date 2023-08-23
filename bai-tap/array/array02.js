// ARRAY-CHECK-02: Kiểm tra có số lẻ và chia hết cho 3 không
// Viết hàm hasOddNumberDivisibleBy3(numberList) để kiểm tra trong mảng numberList có chứa số lẻ nào
// chia hết cho 3 không?
// hasOddNumberDivisibleBy3([1, 5, 7]); // false
// hasOddNumberDivisibleBy3([1, 6]); // true

const hasOddNumberDivisibleBy3 = (numberList) => {
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 3 === 0 && numberList[i] % 2 !== 0) {
      return true;
    }
  }
  return false;
};

console.log(hasOddNumberDivisibleBy3([1, 6, 9]));
