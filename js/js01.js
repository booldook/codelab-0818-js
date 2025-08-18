/* 
- 프로그래밍 언어
대상: 객체(Object, Class)
  속성: 변수 (const, variable) -> abc
  행동: 함수 (method, function) -> abc(...)
- 자바스크립트: 브라우저에서 동작하는 프로그래밍 언어
window > head : Browser
document == body : Brower의 표현영역
alert, confirm, prompt등 window객체가 가지고 있는 함수를 내장함수라 한다.

- 언어
  - 변수, 함수, 제어(if, switch), 반복
*/
function init() {
  // alert("Hello World");
  // console.log("Hello World");
  var userName = prompt("너의 이름은?");
  var isYourName = confirm("당신의 이름은 " + userName + " 입니까?");
  if (isYourName) {
    document.title = userName;
    document.getElementById("userName").innerText = userName;
  } else {
    init();
  }
  console.log("init end")
} 