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
  - 변수, 함수, 제어(if, switch), 반복(for, for~in, for~of, while, do~while)
  - for(초기값(변수=값); 조건; 증감) {반복할 내용}
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

// for(초기값(변수=값); 조건(true일 경우만 실행); 증감) {반복할 내용}
// 전위연산자, 후위연산자
// i = i + 1 => ++i, i++
// i = i - 1 => i--, --i
// i = i + 2 => i+=2
// i = i - 2 => i-=2 
function loop() {
  // for(var i = 1; i <= 100; i = i + 1) {
  for(var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

/*
0819
- 변수, 변수의 데이터타입
- 연산자
- 제어문
- 반복문
- 함수선언문, 함수표현식, 호이스팅
- 배열, 배열메서드
- 객체, 객체메서드
- prototype(class)
- DOM 핸들링
- jQuery
0820~22
- callback, promise, async/await(비동기)
- 통신
- json
- ajax (jquery + ajax, fetch)
0823~미정
- npm 생태계
- typescript
- react feat.typescript, scss - 위에서 여기까지: 프론트엔드
  - scss, webpack, babel, vite ... SSR, CSR ... RTK, zustand, axios(전, 후처리)
- node + sql(DB/DBMS) - 백엔드
- next - 프론트엔드 feat.node
*/