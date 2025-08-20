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

// 순수함수, 일급함수, 클로저함수, 콜백함수

// 인자(매개변수)가 없는 함수, 있는 함수
function hello(name) {
  return `Hello ${name}!`;
}
function sum(a, b) {}

// 리턴값이 있는 함수, 없는 함수
function noReturnFn() {}
function returnFn() {
  return "A";
}

// 순수함수, 비 순수함수
var a = 10;
function sum(a, b) {
  return a + b;
}
function sum2(b) {
  return a + b;
}
console.log(sum(20, 20));
console.log(sum2(20));

// 일급함수
// 함수를 변수에 할당, 인자로 전달(콜백함수), 반환값으로 전달
function greeting(fn, name) {
  return fn(name);
}
