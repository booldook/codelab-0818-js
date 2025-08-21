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

/**
 * 널리쉬연산자(??), ||
 * 펼침연산자(...)
 * 구조분해할당()
 * 옵셔널체이닝(?.)
 * (Promise: ES6, async/await: ES7)
 */
// false 판정을 받는 값
Boolean("");
Boolean(0);
Boolean(undefined);
Boolean(null);
const arr11 = ["F", "G"];
const arr12 = arr.concat(arr11);
const arr13 = [...arr, ...arr11];
const arr14 = [...arr];

const obj2 = { id: 1, name: "홍길동", age: 25 };
// console.log(obj2.id, obj2.name)
const { id: idx, name, age } = obj2;
console.log(idx, name, age);
const arr20 = ["A", "B", "C"];
const [, data] = arr20;
console.log(data);

const [, { no, name: std, kor }] = stdScores;
console.log(no, std, kor);
console.clear();

function optChn() {
  const scores = Object.assign(stdScores);
  const scores2 = scores.map((std) => {
    const { kor, eng, math } = std;
    if ((kor + eng + math) / 3 >= 80) {
      return { ...std, pass: true };
    } else {
      return { ...std };
    }
  });
  scores2.forEach((std) => {
    // console.log(std.pass || false);
  });

  const persons = [
    {
      name: "홍길동",
      children: [
        { name: "홍자녀1", age: 16 },
        { name: "홍자녀2", age: 18 },
      ],
    },
    {
      name: "강감찬",
      children: [],
    },
    {
      name: "이순신",
      children: [{ name: "이자녀1", age: 25 }],
    },
  ];

  persons.forEach((person) => {
    if (person.children[0]) {
      // console.log(person.children[0].age);
    }
    if (person?.children?.[0]?.age) {
      console.log(person.children[0].age);
    }
    if (
      person &&
      person.children &&
      Array.isArray(person.children) &&
      person.children[0] &&
      person.children[0].age
    ) {
      console.log(person.children[0].age);
    }
  });
}
optChn();
