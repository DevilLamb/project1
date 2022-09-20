function sayHi(a, b) {
  //let a 만 했기때문에 언디파인드.
  console.log("안녕", a);
}
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
// sayHi();
console.log(sayHi()); //return값이 없어서 undefined.

function add(a, b) {
  return a + b; //반환값.
}

const result = add(1, 2);
console.log(result);

const sum = add;

console.log(sum(1, 2));
console.log(add(1, 2));

function print(num) {
  if (num < 0) {
    console.log("error: 음수 값은 안됩니다");
    return; //함수 즉시 종료. 밑 코드가 실행이 안 됨.
  }

  console.log(num);
}

print(12);
print(-12);

// // 표현식
// let callName = function printName() {
// 	console.log('박연미');
// };

callName();

//무명함수
let multiply = (a, b) => {
  return a * b;
};
console.log(multiply(10, 20));
// 화살표 함수
let minus = (a, b) => a - b;
console.log(minus(10, 20));
