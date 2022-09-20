for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("----------");
for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(i, j);
  }
}
console.log("----------");
for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; //10을 건너 뛰고 계속 실행.
    console.log("10 종료 ");
    //break; //10이 되면 종료.
  }
  console.log(i);
}
console.log("----------");

let num = 5; //초기식
while (num >= 0) {
  //조건식
  console.log(num);
  num--; //증감식
}
console.log("----------");

let isRun = true;
let i = 0;
while (isRun) {
  console.log(`i = ${i} `);
  if (i === 10) {
    isRun = false;
  }
  i++;
}
console.log("----------");
console.log(`i = ${i} `); //10이 되면 i++후 멈춰서 11출력.
console.log("----------");

i = 0;
while (true) {
  console.log(`i = ${i} `);
  if (i === 10) {
    break;
  }
  i++;
}
console.log("----------");
console.log(`i = ${i} `); //10이 되면 멈추기때문에 10 출력
console.log("----------");

do {
  console.log("조건문 상관없이 작동 ");
} while (false);
//무조건 한 번 실행하고 종료.

function iterate() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
      //break; // 반복문이 종료됨
      return; // 함수가 종료됨
    }
  }
  console.log("함수 끝!");
}

iterate();
