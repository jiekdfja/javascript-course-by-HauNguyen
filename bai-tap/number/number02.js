// NUMBER-02: Kiểm tra số giảm dần
// Viết hàm isDecreasingNumber(n) để kiểm tra n có phải là số giảm dần hay không?
// 0 < n < 1000000
// Số giảm dần có ít nhất 2 chữ số
// Chữ số bên phải luôn nhỏ hơn chữ số bên trái
// Trả về true nếu là số giảm dần, ngược lại trả về false.
// Ví dụ:
// isDecreasingNumber(11) --> false
// isDecreasingNumber(321) --> true
// isDecreasingNumber(12321) --> false

const isDecreasingNumber = (n) => {
  if (n <= 9 || n >= 1000000) {
    return false;
  }

  const listNumberInN = String(n).split("");

  for (let i = 0; i < listNumberInN.length; i++) {
    for (let y = i + 1; y < listNumberInN.length; y++) {
      if (listNumberInN[i] <= listNumberInN[y]) {
        return false;
      }
    }
  }
  return true;
};
