// STRING-02: Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key
// Ví dụ:
// statisticsWords('easy frontend easy')
// // should return an object like this:
// // { easy: 2, frontend: 1 }

const statisticsWords = (str) => {
  const wordList = str.split(" ");
  const objStatis = {};

  for (let i = 0; i < wordList.length; i++) {
    if (wordList[i] in objStatis) {
      objStatis[wordList[i]] += 1;
    } else {
      objStatis[wordList[i]] = 1;
    }
  }

  return objStatis;
};

console.log(statisticsWords("e iu a a"));
