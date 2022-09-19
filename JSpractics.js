//if 문으로 마피아게임 만들기

/*
var victim = ["일반 시민", "의사", "국회의원", "스파이", "기자"];

console.log(victim[0]);
console.log(victim[1]);
console.log(victim[2]);
console.log(victim[3]);
console.log(victim[4]);

var kill = parseInt(prompt("몇 번을 죽일까요?"));

if (kill == 1) {
  victim.splice(0, 1);
  console.log("일반 시민이 죽었습니다.");
  alert("일반 시민이 죽었습니다.");
} else if (kill == 2) {
  victim.splice(1, 1);
  console.log("의사가 죽었습니다.");
  alert("의사가 죽었습니다.");
} else if (kill == 3) {
  victim.splice(2, 1);
  console.log("국회의원이 죽었습니다.");
  alert("국회의원이 죽었습니다.");
} else if (kill == 4) {
  victim.splice(3, 1);
  console.log("스파이가 죽었습니다.");
  alert("스파이가 죽었습니다.");
} else if (kill == 5) {
  victim.splice(4, 1);
  console.log("기자가 죽었습니다.");
  alert("기자가 죽었습니다.");
} else {
  console.log("죽일 수 없는 시민입니다.");
  alert("죽일 수 없는 시민입니다. 경찰에 잡혔습니다.");
}

console.log(victim);
alert("생존한 시민 : " + victim);

*/

// switch  && while 로 4명 죽이는 마피아 게임

var victim = ["일반 시민", "의사", "국회의원", "스파이", "기자"];

console.log(victim[0]);
console.log(victim[1]);
console.log(victim[2]);
console.log(victim[3]);
console.log(victim[4]);

var count = 0;
while (count < 4) {
  var kill = parseInt(prompt("몇 번을 죽일까요?"));

  switch (kill) {
    case 1:
      victim.splice(0, 1);
      console.log("일반 시민이 죽었습니다.");
      alert("일반 시민이 죽었습니다.");
      break;

    case 2:
      victim.splice(1, 1);
      console.log("의사가 죽었습니다.");
      alert("의사가 죽었습니다.");
      break;

    case 3:
      victim.splice(2, 1);
      console.log("국회의원이 죽었습니다.");
      alert("국회의원이 죽었습니다.");
      break;

    case 4:
      victim.splice(4, 1);
      console.log("기자가 죽었습니다.");
      alert("기자가 죽었습니다.");
      break;

    default:
      console.log("죽일 수 없는 시민입니다.");
      alert("죽일 수 없는 시민입니다. 경찰에 잡혔습니다.");

      break;
  }
  count++;
}

console.log(victim);
// alert("생존한 시민 : " + victim);
