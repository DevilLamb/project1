let animal = "cat";
let name = "nabi";
let age = 3;
let isPet = true;
let ownerName = "Jone";

let obj1 = {}; //객체 리터럴
console.log(obj1);
let obj2 = new Object();
console.log(obj2);

let cat = {
  name: "냐옹이",
  age: 3,
  ownerName: "Jone",
};

let dog = {
  name: "멍멍이",
  age: 5,
  ownerName: "yeonmi",
};

console.log("cat=", cat);
console.log("dog=", dog);

dog.isPet = true; //이런식으로 배열 속 객체에 접근하여 속성을 추가하거나 바꿀 수 있다.

console.log("dog=", dog);

let rabbit = {
  name: "껑충이",
  age: 1,
  ownerName: null,
};

console.log("rabbit=", rabbit);
rabbit["isPet"] = false;
console.log("rabbit=", rabbit);
