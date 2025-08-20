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

const helloFn = hello;
console.log(helloFn("booldook"));

function helloFn2() {
  return hello;
}

console.log(helloFn2()("booldook"));

// ES6 함수표현식 (Arrow function)
function fn() {}
const fn2 = function () {};
const fn3 = () => {};

const fn22 = function (a) {
  return a * a;
};
const fn33 = (a) => {
  return a * a;
};
const fn33_1 = (a) => {
  return a * a;
};
const fn33_2 = (a) => a * a;
