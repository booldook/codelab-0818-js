
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

