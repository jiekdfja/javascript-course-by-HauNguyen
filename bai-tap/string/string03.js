// STRING-03: Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của key
// Ví dụ:
// statisticsCharacters('aa b cc ')
// should return an object like this:
// { a: 2, b: 1, c: 2, space: 3 }

const statisticsCharacters = (str) => {
  const characterList = str.split("");
  const objStatis = {};

  for (let i = 0; i < characterList.length; i++) {
    let elCharac = characterList[i];
    console.log(elCharac);

    if (elCharac === " ") {
      elCharac = "space";
    }

    if (elCharac in objStatis) {
      objStatis[elCharac] += 1;
    } else {
      objStatis[elCharac] = 1;
    }
  }
  return objStatis;
};

console.log(statisticsCharacters("aa b cc "));
