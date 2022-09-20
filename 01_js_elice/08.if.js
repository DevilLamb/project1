let select = 1;

if (select === 1) {
  console.log("1. 불고기버거 ");
} else if (select === 2) {
  console.log("2. 새우버거");
} else if (select === 3) {
  console.log("3. 감자튀김");
} else {
  console.log("오류");
}

console.log("----------");
select = 1;

if (select === 1) {
  console.log("1. 불고기버거 ");
}

//if를 두 번 물어보기 때문에 1과 오류가 출력됨!

if (select === 2) {
  console.log("2. 새우버거");
} else if (select === 3) {
  console.log("3. 감자튀김");
} else {
  console.log("오류");
}

//미니 if 삼향연산자

let isPass = false;
let msg = isPass ? "합격" : "불합격";
console.log(msg); //?연산자로 합격 불압격 여부를 판단해서 띄움.
