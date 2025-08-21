/**
 * 객체: 현실세계 -> 프로그래밍
 * 객체 안에서 함수선언문 안의 this는 객체
 * 객체 안에서 화살표함수 안의 this는 window
 */
const person = {
  name: "",
  age: 0,
  gender: "",
  sleep: function () {
    console.log(`Do sleep! ${this.name}`);
  },
  eat: function () {
    console.log(this);
    console.log(`Do eat! ${this.name}`);
  },
  work: function () {
    console.log(`Do work! ${this.name}`);
  },
  getName: function () {
    return this.name;
  },
  getAge: function () {
    console.log("age", this);
    return this.age;
  },
  getGender: () => {
    console.log("gender", this);
    return this.gender;
  },
  setName: function (name) {
    console.log(this);
    this.name = name;
  },
  setAge: function (age) {
    this.age = age;
  },
  setGender: function (gender) {
    this.gender = gender;
  },
};

person.setName("홍길동");
person.setAge(25);
person.setGender("M");
console.log(person.getName());
person.eat();
person.getGender();

// 객체 메서드
// Object.assign(target) // target객체를 새로운 객체로 반환한다.
// Object.create(hello, {})
const stdScores = {
  grade: "1학년",
  classRoom: "1반",
  list: [
    { no: 1, name: "홍길동", kor: 95, eng: 80, math: 85 },
    { no: 2, name: "홍길순", kor: 65, eng: 55, math: 75 },
    { no: 3, name: "홍길만", kor: 85, eng: 75, math: 85 },
  ],
};
console.clear();
console.log(Object.keys(stdScores));
console.log(Object.values(stdScores));
console.log(Object.entries(stdScores));

const stdArr = Object.entries(stdScores);
for (const [key, value] of stdArr) {
  console.log(key, " : ", value);
}
