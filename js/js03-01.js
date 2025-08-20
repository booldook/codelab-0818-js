/**
 * 객체: Object
 */
// var window = {
//   alert: function (str) {
//     console.log(str);
//   },
//   confirm: function () {},
//   document: {
//     createElement: function () {},
//     innerText: "ABC",
//   },
//   a,
//   fn,
//   init: function () {
//     var a;
//   },
// };
// window.codument.innerText = "ABC"
// console.log(window.codument.innerText)
// var a;
// var fn;
// function init() {
//   var a;
// }

// 객체를 사용한 안좋은 데이터구조
// var stdScores = {
//   stdName: ["홍길동", "홍길순", "홍길만"],
//   stdKor: [95, 65, 100],
//   stdEng: [80, 55, 95],
//   stdMath: [85, 75, 85],
// };
// console.log(stdScores.stdName);

var stdScores = [
  { name: "홍길동", kor: 95, eng: 80, math: 85 },
  { name: "홍길순", kor: 65, eng: 55, math: 75 },
  { name: "홍길만", kor: 85, eng: 75, math: 85 },
];
console.log(stdScores);
console.log(stdScores[0].name);
