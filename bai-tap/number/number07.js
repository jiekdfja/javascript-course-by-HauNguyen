// NUMBER-07: Kiểm tra số đối xứng
// Viết hàm isSymetricNumber(n) để kiểm tra n có phải là số đối xứng hay không?
// Với n thoả điều kiện 1 < n < 1000000
// Số đối xứng là số đọc từ trái sang phải cũng giống như đọc từ phải sang trái.
// Trả về true nếu đúng, ngược lại trả về false
// Ví dụ:
// isSymetricNumber(10) --> false
// isSymetricNumber(11) --> true
// isSymetricNumber(12321) --> true

// const isSymetricNumber = (n) => {
//   return true;
// };

const isSymetricNumber = (n) => {
  if (n <= 1 || n >= 1000000) {
    return false;
  }

  const revN = reverseNumber(n);

  if (revN !== n) {
    return false;
  }

  return true;
};

const reverseNumber = (n) => {
  const listNumberInN = String(n).split("");

  const newNumberList = [];
  for (let i = listNumberInN.length - 1; i >= 0; i--) {
    newNumberList.push(listNumberInN[i]);
  }
  return Number(newNumberList.join(""));
};
