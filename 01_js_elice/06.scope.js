let myName = "박연미";
console.log(myName);
myName = "아이유";
console.log(myName);

const catName = "나비";

{
  console.log(catName); //전역 스코프는 자식 스코프(지역)안에서 호출 가능하다.

  const x = 1;
  console.log("부모 블럭 안이야 x=", x);
  {
    const y = 2;
    console.log("자식 블럭 안이야 x=", x);
    console.log("자식 블럭 안이야 y=", y);
  }
}

//console.log(x); //지역 스코프는 지역 밖에서 호출할 수 없다.

let me = "global 전역 scope";
{
  let me = "local 지역 scope";
  console.log("지역스코프 me=", me);
}
console.log("글로벌 스코프 me=", me);

function printName() {
  const myName = "박연미";
  console.log("함수 안이야", myName);
}

console.log(myName); //함수 안에서 선언한 변수, 함수 스코프도 함수 밖에서 호출 불가.

name = "박연미"; // var name = "박연미"
console.log("name =", name);
console.log(typeof name); // 선언을 하지 않고 써도 호출이 되긴 한다.

var dogName = "멍멍이";
console.log("dogName =", dogName);
var dogName = "강아지";
console.log("dogName =", dogName);

//let const = 블록스코프 영역
//var = 함수스코프만 인식!

var animal = "고양이";
{
  var animal = "강아지";
  {
    var animal = "토끼";
  }
}
console.log("animal =", animal); //let일 경우 고양이가 나오는게 맞다.

function test() {
  var z = 3;
}

//console.log(z);//함수 스코프만 인식..
