console.log("hello!");

const isola = [
  { name: "rosanna", age: 300, heigth: 145 },
  { name: "helga", age: 60, heigth: 179 },
  { name: "walter", age: 55, heigth: 181 },
  { name: "bianca", age: 28, heigth: 1800 },
];

const YBisola = isola.filter((a) => a.age < 30).map((a) => a.name); //매서드 체이닝

console.log(YBisola);
