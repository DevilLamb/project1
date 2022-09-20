// 데이터 타입 : number
let integer = 10; //양수
let negative = -10; //음수
let double = 3.14; //실수

let binary = 0b0100001;
let octal = 0o101;
let hex = 0xb1;
let bigInt = 123232232332322322222222n; //n을 붙이면 그대로 표현됨
console.log(binary);
console.log(octal);
console.log(hex);
console.log(bigInt);
console.log("---------");

console.log(10 + 3);
console.log(10 - 3);
console.log(10 * 3);
console.log(10 / 3);
console.log(10 % 3); //나머지값
console.log(10 ** 3); //거듭제곱 es7부터 지원하기 시작함.
console.log(Math.pow(10, 3)); //거듭제곱. 위와 같다.

console.log(0 / 10); //0으로 나눔 : 무한대.
console.log(10 / 0); //무한대..
console.log(10 / -0); //- 무한대.
console.log(10 / "string"); //Not a Number
console.log("string" === NaN);

// 데이터 타입 : string
let myName = "박연미";
console.log(myName);
myName = "박연미";
console.log(myName);
myName = `박연미`;
console.log(myName);

let myInfo = "'반갑습니다 제 이름은'" + myName + "입니다.";
console.log(myInfo);

// 특수문자 \n 줄바꿈 \t 탭키
myInfo = "'반갑습니다 \n 제 이름은 \t '" + myName + "입니다.";
console.log(myInfo); //\n은 줄바꿈. \t는 탭키(많이 띄운다.)

myInfo = `"반갑습니다 \n 제 이름은 ' ${myName} 입니다."`;
console.log(myInfo); //템플릿 리터널. $()을 사용하면 +없이 연결 가능.

let text = "문자에서의 " + " + 는 연결 연산자";
console.log(text);
text = "3" + 10 + 7; // 3107 이 출력됨. (문자가 맨 앞에 있을때는 전부 문자로 인식함.)
console.log(text);
text = 10 + 7 + "3"; //173 이 출력됨. (숫자가 먼저 오면 숫자 연한 후 문자 연결.)
console.log(text);

// 데이터 타입 : boolean true or false
//is 형용사와 같이 붙여 istrue isfalse 로 많이 쓰인다.

let isActivated = false;
let isMember = true;

console.log(isMember);

console.log("---------------------");

// 거짓 값으로 인식하는 데이터. 전부 false로 나온다!
console.log(!!0);
console.log(!!"");
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// 참인 값으로 인식하는 데이터 전부 true라고 나온다!
console.log(!!10);
console.log(!!-3.14);
console.log(!!"String");
console.log(!![]); //빈 베열이지만 배열을 만들면 주소값을 갖게 된다. 그래서 트루.
console.log(!!{}); //빈 객체이지만 (배열과 같음)
console.log(!!Infinity);

// null, undefined
//null->빈 주소값을 할당하는 객체, null객체의 주소값을 할당받은 상태.
let animal;
console.log(animal); // 이게 무슨 값인지 어떤 역할을 하는지 모름.

animal = null;
console.log(animal); // 이걸 쓸 건데 아직 값이 정해지지 않음.(메모리방만 만듬)

// typeof 키워드
console.log(typeof null); // object
console.log(typeof undefined); // undefined

animal = "Dog";
console.log(typeof animal); //값이 정해졌기 때문에 object에서 string타입으로 바뀌었다.
