// NUMBER-01: Kiểm tra số tăng dần
// Viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Trả về true nếu là số tăng dần, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumber(11) --> false
// isIncreasingNumber(123) --> true
// isIncreasingNumber(12321) --> false

const isIncreasingNumber = (n) => {
  if (n <= 9 || n >= 1000000) {
    return false;
  }

  const listNumberInN = String(n).split("");

  for (let i = 0; i < listNumberInN.length; i++) {
    for (let y = i + 1; y < listNumberInN.length; y++) {
      if (listNumberInN[i] >= listNumberInN[y]) {
        return false;
      }
    }
  }
  return true;
};
