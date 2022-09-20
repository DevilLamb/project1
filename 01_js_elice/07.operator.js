let num1 = 10;
let num2 = 20;

console.log("num1 =", num1); //10 출력
console.log("num1 =", num1 + 1); //11이 출력이지만 num1은 여전히 10이다.
console.log("num1 =", num1); //그래서 10이 출력됨.

let result = num1 + num2 * 100;
console.log("result =", result);
// 연산자 우선순위

result = (num1 + num2) * 100;

num2 = num2 + 1; //21출력
console.log("num2 =", num2);
num2 += 1; // num2 = num2 + 1 ; //22로 출력
num2 %= 10; // num2 = num2 % 10; //나머지라서 2출력
console.log("num2 =", num2);
num2++;
console.log("num2 =", num2);
--num2;
console.log("num2 =", num2);

// 증감 연산자
a = 0;
console.log(a++); // 0
console.log(a); // 1
let b = a++;
console.log(b); //1
console.log(a); //2

//비교연산자
console.log("비교연산자");
console.log(10 > 3);
console.log(10 < 3);
console.log(10 <= 3);
console.log(10 >= 3);
console.log(10 == 3);
console.log(10 != 3); //=은 항상 뒤에 온다.

// == 과 === 차이
console.log("== 과 === 차이");
num1 = 10;
console.log(10 == "10"); //true 출력
console.log(num1 == "10"); //true 출력
console.log(num1 === "10"); //false출력, 자료형 타입까지 비교함.
console.log("------");
console.log(true == 1); //0이 아니니 참이 나옴.
console.log(true === 1); // 넘버와 불리언 타입 비교라 거짓이 나옴.
console.log("------");
let bool = false;
console.log(bool != 1); // 0이 아니니까 거짓이라서 참이 나옴.
console.log(bool !== 1);
let cat = {
  name: "별이",
};
let dog = {
  name: "별이",
};
console.log("오브젝트 비교");
console.log(cat == dog); //내용이 같아도 주소가 다르기에 같지 않음.
console.log(cat === dog); //역시 타입도 같아도 주소가 다름.
console.log(cat.name == dog.name); //값 안의 속성과 직접 비교하면 같음.
console.log(cat.name === dog.name); // 마찬가지로 속성의 자료형이 같다.

console.log("--------------------------------");

let rabbit = dog; //얕은 복사를 했기 때문에 내용이 같아짐. 그래서 전부 참.
console.log(rabbit.name == dog.name);
console.log(rabbit.name === dog.name);

// 논리연산자

console.log("논리 연산자 ");

// && 모든 값이 참이면 참 , 한개라도 거짓이면 거짓
// || 한개라도 참이면 참 ,

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

num1 = 0;
bool = true;

console.log(num1 > 4 || (cat.name == "별이" && bool));

// 활용 예제
const kor = 80;
const math = 90;
const eng = 60;
const avg = (kor + math + eng) / 3;

console.log("avg = ", avg);

// 평균값이 60점 이상이고 각각 점수가 80점 이상일때 통과
console.log(avg >= 60 && kor >= 80 && math >= 90 && eng >= 90);
//맨 뒤만 거짓이기 때문에 맨 앞까지 계산 후 거짓 출력.
//만약 맨 앞이 거짓이면 계산하지 않고 전부 패스.

let pass = avg >= 60 && kor >= 80 && math >= 90 && eng >= 90;

console.log("pass =", pass);
console.log("pass =", !pass); // !의 의미 : true => false , false -> true
console.log("0 =", !!0); //거짓->!참 -> !참의 거짓 -> false로 출력.
