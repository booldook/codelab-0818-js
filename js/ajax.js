/**
 * 동기/비동기 - 이벤트루프/스택/큐/webAPI
 * email: 문자 주고받는 서비스
 * telnet: 원격 접속: port23
 * ftp: file transfer protocol(통신규약): port21
 */
function fn1() {
  console.log("fn1");
}
function fn2() {
  console.log("fn2");
}
function getData() {
  // fetch().then().then().catch().finally()
  fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer ",
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}
getData();

// function cb() {
//   console.log("cb");
// }
// setTimeout(cb, 5000);
// fn1();
// fn2();
