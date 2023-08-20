// NUMBER-03: Kiểm tra số tăng dần đều theo khoảng cách cho trước
// Viết hàm isIncreasingNumberByDistance(n, x) để kiểm tra n có phải là số tăng dần đều với khoảng cách
// giữa 2 chữ số là x không?
// 0 < n < 1000000, 0 < x < 5
// Số tăng dần có ít nhất 2 chữ số
// Chữ số bên phải luôn lớn hơn chữ số bên trái
// Khoảng cách của 2 chữ số liền kề là x
// Trả về true nếu là số tăng dần đều theo khoảng cách x, ngược lại trả về false.
// Ví dụ:
// isIncreasingNumberByDistance(11, 1) --> false
// isIncreasingNumberByDistance(123, 1) --> true
// isIncreasingNumberByDistance(135, 2) --> true
// isIncreasingNumberByDistance(135, 1) --> false

const isIncreasingNumberByDistance = (n, x) => {
  if (n <= 9 || n >= 1000000) {
    return false;
  }

  if (n.toString().length < 2) {
    return false;
  }

  if (x <= 0 || x >= 5) {
    return false;
  }

  const numberListInN = String(Math.abs(n)).split("");

  for (let i = 0; i < numberListInN.length - 1; i++) {
    if (numberListInN[i + 1] - numberListInN[i] != x) {
      return false;
    }
  }
  return true;
};
