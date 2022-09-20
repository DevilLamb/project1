function introduce(lastName, firstName, callBack) {
  let fullName = lastName + firstName;

  callBack(fullName);
}

function say_welcome(name) {
  console.log("반갑습니다 " + name + "님 ");
}

function say_bye(name) {
  console.log("안녕히가세요 " + name + "님");
}

introduce("박", "연미", say_welcome); // 반갑습니다 박연미 님

let firstName = "박";
let lastName = "연미";

introduce(firstName, lastName, say_bye); // 안녕히가세요 박연미님

introduce("박", "연미", function (name) {
  console.log(name);
});

introduce("박", "연미", (name) => console.log(name));
