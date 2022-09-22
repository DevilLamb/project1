const animals = ["고양이", "강아지", "늑대", "호랑이"];

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

//고차함수 forEach

// animals.forEach(function (val, idx, arr) {
//   console.log("val = ", val);
//   console.log("idx = ", idx);
//   console.log("arr = ", arr);
// });

animals.forEach((val) => console.log("val=", val));

const cat = { kind: "고양이", age: 4 };
const dog = { kind: "개", age: 13 };
const rabbit = { kind: "토끼", age: 2 };
const hamster = { kind: "햄스터", age: 0.5 };

const pets = [cat, dog, rabbit, hamster, cat];

let ans = pets.find((obj) => obj.kind == "개");
console.log(ans);
//펫츠 중에 개를 찾아서 리턴해준다. 만약 없는값이면 undefined를 출력한다.

//.findIndex 는 개가 몇 번째에 있는지 출력
//.some은 개가 있는지 불린값으로 출력
//.every는 모든 값이 개인지 불린값으로 출력

//이거 다시 해보기
let ans2 = pets.filter((obj) => {
  obj.kind === "고양이";
});
console.log(ans2);

const arr = [1, 2, 3, 4, 5, 6];
//ans3 = arr.map((num)=>num*10);

const arr2 = arr.map((num) => [num, num + 1]);
console.log(arr2);
ans4 = arr2.flatMap((num) => num);
console.log(ans4);

//sort
let text = ["hi", "abs", "ba", "toy"];
text.sort(); //=>오름차순정렬
console.log(text);
//=>텍스트가 sort로 인해 정렬됨. 숫자룰 정렬하면 텍스트정렬로 1,100,2,200이 되어버린다..
//=>숫자를 정렬하고 싶으면 넘버로 바궈서.
let numm = [1, 200, 4, 100, 3];
numm.sort((a, b) => a - b); //이러면 숫자도 정렬된다.numm.sort((a, b) => b-a);하면 내림차순정렬.
console.log(numm);

let ans5 = numm.reduce((sum, value) => {
  sum += value;
  console.log("sum ${sum}", "value ${value}");
  return (sum += value);
});
console.log("ans5", ans5);
