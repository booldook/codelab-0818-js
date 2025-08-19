/*
변수(상수), 데이터 타입
- 변수: 변하는 값 (var, let)
- 상수: 변하지 않는 값 (const)
- 데이터 타입: primitive type(원시타입), reference type(참조타입)
  - 원시타입: char(문자), string(문자열), number(숫자), undefined, Infinity, NaN
  - 참조타입: Array(배열), Object(객체), null(빈값), Set, Map, function ...
*/

// var a; //  a 라는 변수를 선언함.
// a = "ABC"; // a에 "ABC"문자열을 대입함.
// var a = "ABC"; // 축약

// const b = "ABC";
// b = "C"; // 선언과 값이 대입된 상수는 재대입이 안된다.

// 원시타입과 참조타입 확인하기
var c = "ABC"; // primitive
var d = [1, 2, 3]; // 배열: 데이터의 집합 reference type

// 산술연산자 + - * / %
// 논리연산자(boolean 연산) || (논리합, 거나, or), && (논리곱, 그리고, and)

console.log(d);
console.log(d[0]);
console.log(d[1]);
console.log(d[2]);

var c2 = c; // ABC
c = "A"; // A, ABC
console.log(c, c2);

var d2 = d; // d: [1, 2, 3], d2: [1, 2, 3]
d[0] = 4;
d[1] = 5;
d[2] = 6;
console.log(d, d2);

// var a = "A";
// var b = 2;
var c = null;
var d = [1, 2, 3, 4, 5, 6]; // 배열 Array
var e = {}; // 객체 Object
// 함수선언문
function init() {
  console.log("INIT");
}
var fn = init;
// 함수표현식
var fn2 = function () {
  console.log("INIT2");
};

init();
fn();
fn2();

// 호이스팅: 끌어올리다.
hoisting(); // 실행됨
// hoisting2(); // 실행 안됨

function hoisting() {
  console.log("hoisting");
}

var hoisting2 = function () {
  console.log("hoisting2");
};

console.clear();

// 심플 계산기
function calc() {
  var frm = document.myForm;
  var a = frm.a.value;
  var b = frm.b.value;
  var oper = frm.oper.value;
  var result = 0;

  if (a === "") {
    alert("값1을 입력하세요.");
    frm.a.focus();
    return false;
  }
  if (b === "") {
    alert("값2을 입력하세요");
    frm.b.focus();
    return false;
  }
  if (Number(b) === 0 && (oper === "div" || oper === "mod")) {
    alert("나누기나 나머지 연산은 0으로 실행할 수 없습니다.");
    frm.b.focus();
    return false;
  }

  switch (oper) {
    case "sum":
      result = Number(a) + Number(b);
      break;
    case "min":
      result = Number(a) - Number(b);
      break;
    case "mul":
      result = Number(a) * Number(b);
      break;
    case "div":
      result = Number(a) / Number(b);
      break;
    case "mod":
      result = Number(a) % Number(b);
      break;
    default:
      alert("연산기호를 선택해주세요.");
      frm.oper.focus();
      return false;
  }

  // if (oper === "sum") {
  //   result = Number(a) + Number(b);
  // } else if (oper === "min") {
  //   result = Number(a) - Number(b);
  // } else if (oper === "mul") {
  //   result = Number(a) * Number(b);
  // } else if (oper === "div") {
  //   result = Number(a) / Number(b);
  // } else if (oper === "mod") {
  //   result = Number(a) % Number(b);
  // } else {
  //   alert("연산기호를 선택해주세요.");
  //   frm.oper.focus();
  //   return false;
  // }
  frm.result.value = result;

  // console.log(a);
  // console.log(b);
  // console.log(oper);
  // console.log(frm);
}
