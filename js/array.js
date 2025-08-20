Array.prototype.map2 = function (fn) {
  const arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(fn(this[i]));
  }
  return arr;
};

var arr = [];
arr.push("B");
arr.push("C");
arr.unshift("A");
console.log(arr.pop());
console.log(arr.shift());
console.log(arr);
console.clear();

arr.unshift("A");
arr.push("C");
arr.push("D");
arr.push("E");
arr.push("F");
// [(0)'A', (1)'B', (2)'C', 'D', 'E', 'F']
// console.log(arr.splice(1, 2));
var arr2 = arr.slice(1, 3);
console.log(arr2);
console.log(arr);
console.clear();

const arr3 = ["A", "B", "C"];
const arr4 = ["D", "E", "F"];
const arr5 = arr3.concat(arr4);
console.log(arr5);

const arr6 = ["A", "B", "C", "D", "E", "F"];
const arr7 = arr6.slice(0, arr6.length);
const arr8 = [].concat(arr6);
arr6.push("G");
console.log(arr6, arr7, arr8);

// join, split(문자열 메서드)
console.log(arr6.join());
var str = "010-1111-2222";
console.log(str.split("-"));
var str2 = "ABCDEF";
console.log(str2.split(""));
console.log(str2.split()); // 통채로
console.clear();

// filter, map, reduce, some, every
const stdScores = [
  { no: 1, name: "홍길동", kor: 95, eng: 80, math: 85 },
  { no: 2, name: "홍길순", kor: 65, eng: 55, math: 75 },
  { no: 3, name: "홍길만", kor: 85, eng: 75, math: 85 },
];

// Array.filter()
const overKor80 = stdScores.filter(function (v) {
  return v.kor >= 80;
});
console.log(overKor80);

// Array.filter함수는 이렇게 생겼을 것으로 추정됨
function filter(items, fn) {
  const returnItems = [];
  for (var i = 0; i < items.length; i++) {
    if (fn(items[i])) {
      returnItems.push(items[i]);
    }
  }
  return returnItems;
}
const result = filter(stdScores, function (student) {
  return student.kor >= 80;
});
const overKor80A = stdScores.filter((student) => student.kor >= 80);
console.log(overKor80A);
console.clear();

// map
// const stdKor = stdScores.map((std) => {
//   return { kor: std.kor };
// });
const stdKor = stdScores.map((std) => ({ kor: std.kor }));
console.log(stdKor);

const stdTotal = stdScores.map((std) => {
  return std.kor + std.eng + std.math;
});
console.log(stdTotal);

const stdTotalAvg = stdScores.map2((std) => {
  const total = std.kor + std.eng + std.math;
  const avg = total / 3;
  return {
    no: std.no,
    name: std.name,
    kor: std.kor,
    eng: std.eng,
    math: std.math,
    total: total,
    avg: Number(avg.toFixed(2)),
  };
});
console.log(stdTotalAvg);
