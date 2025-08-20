/**
 * JS Array
 * 배열
 * 배열변수의 index를 부여하고  변수[Index]에 값을 저장한다.
 */

// 배열선언
// var arr = [];
// var arr = new Array();

function onScore() {
  var stdNames = ["홍길동", "홍길순", "홍길만"]; // studentsNames[0] 홍길동
  var stdKors = [95, 65, 100];
  var stdEngs = [80, 55, 95];
  var stdMaths = [85, 75, 85];
  var stdTotal = [];
  var stdAvg = [];

  var stdScores = [
    [1, "홍길동", 95, 65, 100],
    [2, "홍길순", 80, 55, 95],
    [3, "홍길만", 85, 75, 85],
  ];

  console.log(stdScores);
  console.log(stdScores[0].length);

  // var tbl;
  // tbl = document.getElementById("stdTbl");
  // console.log(tbl);
  // tbl = document.querySelector("#stdTbl");
  // console.log(tbl);
  // tbl = $("#stdTbl")[0];
  // console.log(tbl);

  // var table = document.getElementById("stdTbl");
  // var tbody = document.getElementById("stdTbody");
  // var html =
  //   "<tr><td class="std-item">0</td><td>홍길동</td><td>75</td><td>78</td><td>82</td><td></td><td></td><td></td></tr>";
  // tbody.innerHTML = html;

  // var tbody = document.querySelector("#stdTbody");
  // var tr = document.createElement("tr");
  // var td = document.createElement("td");
  // td.className = "std-item";
  // td.innerText = stdNames[0];
  // tr.appendChild(td);
  // tbody.appendChild(tr);

  // var $tbody = $("#stdTbody");
  // console.log($tbody);

  // $("#stdTbody").append("<tr><td>홍길동</td></tr>");
  // $("#stdTbody").append("<tr>").append("<td>")
  //jQuery문법 예제
  // var $tbody = $("#stdTbody").append("<tr>");
  // var $tr = $("<tr>").appendTo($("#stdTbody"));
  // var $td = $("<td>").appendTo($tr);
  // console.log($tr, $td);
  // var $tr = $("<tr>").appendTo($("#stdTbody")).append("<td>");
  // console.log($tr);
  for (var i = 0; i < stdScores.length; i++) {
    var $tr = $("<tr>").appendTo($("#stdTbody"));
    for (var j = 0; j < stdScores[i].length; j++) {
      // $tr.append("<td>" + stdScores[i][j] + "</td>");
      $tr.append(`<td>${stdScores[i][j]}</td>`);
    }
    $("#stdTbody").append($tr);
  }

  // ES문법 예제
  // var tbody = document.querySelector("#stdTbody");
  // var tr;
  // var td;
  // for (var i = 0; i < stdScores.length; i++) {
  //   tr = document.createElement("tr");
  //   for (var j = 0; j < stdScores[i].length; j++) {
  //     td = document.createElement("td");
  //     td.innerText = stdScores[i][j];
  //     tr.appendChild(td);
  //   }
  //   tbody.appendChild(tr);
  // }

  // ES5 문법 예제
  // for (var i = 0; i < 3; i++) {
  //   tr = document.createElement("tr");
  //   td = document.createElement("td");
  //   td.className = "std-item";
  //   td.innerText = i + 1;
  //   tr.appendChild(td);
  //   td = document.createElement("td");
  //   td.className = "std-item";
  //   td.innerText = stdNames[i];
  //   tr.appendChild(td);
  //   td = document.createElement("td");
  //   td.className = "std-item";
  //   td.innerText = stdKors[i];
  //   tr.appendChild(td);
  //   td = document.createElement("td");
  //   td.className = "std-item";
  //   td.innerText = stdEngs[i];
  //   tr.appendChild(td);
  //   td = document.createElement("td");
  //   td.className = "std-item";
  //   td.innerText = stdMaths[i];
  //   tr.appendChild(td);
  //   console.log(tr);
  //   tbody.appendChild(tr);
  // }
}

function onGugudan() {
  var txt = "";
  // for(var i=0; i<9; i++) {}

  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {}
  }

  // txt = "2 x " + i + " = " + 2 * i; // 2 x 1 = 2
  for (var i = 2; i <= 9; i++) {
    for (var j = 1; j <= 9; j++) {
      txt = `${i} x ${j} = ${i * j}`;
      console.log(txt);
    }
  }
}
