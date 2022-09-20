// 얕은 복사 깊은 복사

// 깊은 복사
// 값 자체를 복사해서 기존 값에 영향을 미치지 않음

let myName = "박연미";
let yourName = myName; // myName 값을 복사해옴
console.log("myName=", myName);
console.log("yourName=", yourName);

yourName = "아이유";
console.log("myName=", myName);
console.log("yourName=", yourName);

// 값이 yourName만 변경된거 확인 => 원시타입는 값이 복사되어 전달됨
// 기존값에 영향 미치지 않음. 새로운 데이터 방이 만들어지는 것.

//얕은 복사 예제
let arr = [1, 2, 3, 4];
let newArr = arr;
newArr[2] = 300;
console.log("arr=", arr);
console.log("newArr=", newArr);

//얕은 복사 == 주소 복사. 기존의 복사한 값에도 영향을 미침.
//arr와 nerArr는 같은 주소를 참조하고 있기 때문에 내용을 바꾸면 같이 바뀐다.

let cat = {
  name: "nabi",
};
console.log("복사 전 =", cat);

let dog = cat;
dog.name = "멍멍이";

console.log("복사 후 cat=", cat);
console.log("복사 후 dog=", dog);

//배열에서도 똑같이 작용한다.

const a = 10;

const obj = {
  name: "객체",
};
console.log(obj);

obj.name = "멍멍이";
obj.age = 5;
console.log(obj);

//const로 선언했더라도 배열 안 키는 수정 가능하다! (배열의 주소값은 같기 때문)
