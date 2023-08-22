// STRING-01: Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.
// Ví dụ: countWords('easy frontend') --> 2

const countWords = (str) => {
  const wordList = str.split(" ");

  return wordList.length;
};

console.log(countWords("kyle web dev"));
