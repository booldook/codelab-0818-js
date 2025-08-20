/**
 * for (var i=0; i<5; i++) {}
 * for~in
 * for~of
 * Array.forEach()
 * String.toUpperCase() // 대문자로
 * String.toLowerCase() // 소문자로
 */

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// console.log(i);

const arr = ["A", "B", "C", "D", "E"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
for (let idx in arr) {
  // 다돌려
  console.log(arr[idx]);
}
for (let item of arr) {
  // 배열만...
  console.log(item);
}
arr.forEach((item, idx) => {
  console.log(idx, item);
});
for (let idx in { no: 1, no2: 2, no3: 3 }) {
  console.log(idx);
}
for (let idx in "hello") {
  console.log(idx);
}
for (let idx in window) {
  console.log(idx);
}

const stdScores = [
  { no: 1, name: "홍길동", kor: 95, eng: 80, math: 85 },
  { no: 2, name: "홍길순", kor: 65, eng: 55, math: 75 },
  { no: 3, name: "홍길만", kor: 85, eng: 75, math: 85 },
];
console.clear();

const arr2 = new Array(); // []
const obj = { no: 3, name: "홍길만", kor: 85, eng: 75, math: 85 }; // {}
console.log(arr2, obj);
