// ARRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?
// hasEvenNumberGreaterThanN([2, 3, 4], 5); // false
// hasEvenNumberGreaterThanN([2, 3, 4, 6], 5); // true

const hasEvenNumberGreaterThanN = (numberList, n) => {
  for (const element of numberList) {
    if (element % 2 === 0 && element > n) {
      return true;
    }
  }
  return false;
};

console.log(hasEvenNumberGreaterThanN([2, 3, 4, 6], 5));
