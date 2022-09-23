//모르는 문제 1. 하이라이트와 마우스오버-아웃 관련

function highlightWords() {
  const txt = document.getElementById("targetp").innerText;
  let words = txt.split(" ");

  let output = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let replacementword;

    // 2. 단어의 길이가 8 이상인 경우 단어를 하이라이트 하세요.

    if (word.length >= 8) {
      replacementword = `<span class='lightext'>${word}</span>`;
    } else {
      replacementword = word;
    }

    output = output + " " + replacementword + " ";
  }

  return output;
}

document.getElementById("targetp").innerHTML = highlightWords();

// 3. 볼드체인 텍스트를 모두 파란색으로 변경하세요.
function highlight() {
  var blue = document.querySelectorAll("strong");
  for (let i = 0; i < blue.length; i++) {
    //왜 여기서 for문을 돌려? 그냥 크리에이트엘리먼츠.해서 스타일을 블루로 주면 안돼?
    blue[i].style.color = "blue";
  }
}

// 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
function returnNormal() {
  var black = document.querySelectorAll("strong");
  for (let i = 0; i < black.length; i++) {
    //얘도..왜?
    black[i].style.color = "black";
  }
}

//모르는 문제 2. node.js인가??

// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
//이 문제 잘 모르겠음

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
}); //여기까지는 node.js

var N = 0; //입력받을 정수 n을 초기화
var count = 0; //몇번인지 카운트할 변수도 초기화
var result = ""; //나중에 문자열로 출력할 결과도 초기화

rl.on("line", function (x) {
  //x를 입력받아서
  if (count == 0) {
    //카운트가 아직 0이면(근데 왜 ===가 아니지?)
    N = parseInt(x); //n에 x를 정수로 넣고
  } else {
    //아니면
    result += x; //결과에 x를 넣어준다(문자열을 만드는 과정)
  }

  count += 1; //카운트를 하나씩 올린다.

  if (count > N) {
    //그래서 만약 카운트가 n보다 많아지면
    rl.close(); //끝낸다.
  }
}).on("close", function () {
  console.log(result); //그리고 결과 출력
  process.exit();
});
