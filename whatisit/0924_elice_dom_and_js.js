//수요일(9월 21일) 수업부터 정리. dom은 이런식으로 쓰는거다..

//이거부터 갑자기 어려움

window.onload = function () {
  var el = document.getElementById("change_heading");
  el.innerText = "카 레이싱 대회";

  //2. `<section>`내에 있는 색 팔레트에 마우스 커서를 갖다댈 때 `index.html`에 `<span class="selected">`태그에 None!을 해당하는 색깔로 대체하는 코드를 작성하세요.
  var section = document.querySelector("section"); //이거 태그중 section 골라서
  section.addEventListener("mouseover", function (event) {
    //마우스오버하면
    var selectedColor = document.querySelector(".selected"); //.셀렉티드 를 찾아가지고
    selectedColor.innerText = event.target.className; //그 안에 이너텍스트를 이벤트=받은 인자.타겟의.클래스네임으로 바꿔
  });

  var newDiv = document.createElement("div");
  newDiv.className = "purple";
  section.appendChild(newDiv);

  var button = document.querySelector("button");
  var car1 = document.querySelector(".car1");
  var car2 = document.querySelector(".car2");
  car1.style.marginLeft = 0;
  car2.style.marginLeft = 0;

  function reset(car1, car2) {
    clearTimeout(car1.timer);
    clearTimeout(car2.timer);
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;
    button.disabled = false;
  }

  //3.`button.addEventListener()` 함수 내에 경주 시작 버튼을 클릭할 때 car1과 car 2를 좌에서 우로 움직이는 코드를 작성하세요.
  //4.car1이 오른쪽 사이드에 먼저 도착했을 경우 Car 1 승이라는 alert를 띄우세요. car2도 동일하게 alert 메시지를 띄우는 코드를 작성하세요.
  button.addEventListener("click", function (event) {
    //버튼을 클릭하면 어떤 이벤트가 일어나는데
    button.disabled = true; //버튼의 .disabled(비활성)상태를 트루로 하고
    car1.timer = setInterval(function () {
      //카 1의 타이머를 setInterval 함수로
      car1.style.marginLeft =
        parseInt(car1.style.marginLeft) + Math.random() * 60 + "px"; //왼쪽까지 랜덤한 수에 60곱한 px만큼 움직이기
      if (parseInt(car1.style.marginLeft) > window.innerWidth) {
        //만약 윈도우 창 끝까지 도달하면(윈도우 창 픽셀크기에 도달하면)
        alert("Car 1 wins!"); //카 1 이겼다고 메시지
        reset(car1, car2); //카1,2를 리셋하기
      }
    }, 60); //여기 60은 뭐임

    car2.timer = setInterval(function () {
      //카 2도 똑같아
      car2.style.marginLeft =
        parseInt(car2.style.marginLeft) + Math.random() * 60 + "px";
      if (parseInt(car2.style.marginLeft) > window.innerWidth) {
        alert("Car 2 wins!");
        reset(car1, car2);
      }
    }, 60);
  });
};

//리스트 추가, 삭제하기

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//form submit event
form.addEventListener("submit", addItem);
//delete event
itemList.addEventListener("click", removeItem);
//filter event
filter.addEventListener("keyup", filterItems);

//1. `addItem(e) {}` 함수 내에  id="item" 에 입력된 input 값을 `<li> 태그`로 추가합니다.
//2. 이 때, li 를 생성해서 `appendChild()`와   `.createTextNode(`) 를 사용합니다.
//3. 아이템이 생성된 동시에 삭제 버튼도 `appendChild()`를 사용해서 li에 추가합니다. ( `itemList`에 생성된 li를 추가합니다.)
function addItem(e) {
  e.preventDefault();
  var add_item = document.querySelector("#item").value; //#item에 입력된 값(value)을 받아서 변수에 저장
  var newitem = document.createElement("li"); //createElement로 빈 목록newitem을 만들어준 후 리스트라고 태그 추가!

  newitem.className = "list-group-item"; //클래스명도 다른 목록(li)들과 맞춰서 써주자.

  newitem.appendChild(document.createTextNode(add_item)); //add_item으로 생성된 값을 위에서 선언한 newitem 에 createTextNode로 내용을 채워넣는다
  var delete_item = document.createElement("button"); //delete버튼을 만들어준다.
  delete_item.className = "btn btn-danger btn-sm float-right delete"; //마찬가지로 클래스명을 주고
  delete_item.appendChild(document.createTextNode("삭제")); //삭제라는 이름을 버튼 안에 넣는다.
  newitem.appendChild(delete_item); //뉴아이템에 삭제버튼도 같이 만들어주기
  itemList.appendChild(newitem); //이제 위에 적은 뉴아이템과 삭제버튼을 아이템리스트에 추가!
}

//5. `removeItem(e) {}` 함수 내에 작성합니다.
//6. index.html에`btn btn-danger btn-sm float-right delete` 로 태그된 delete 버튼을 click 하게 될 경우  itemList에서 제거합니다. 이 때 removeChild()를 사용합니다.
function removeItem(e) {
  //삭제하는 함수를 만들자
  if (e.target.classList.contains("delete")) {
    //만약에 함수 e가 클래스리스트의 delete를 타겟으로 하면
    if (confirm("진짜?")) {
      //진짜냐고 물어본다
      var a = e.target.parentElement; //맞으면 부모 엘리먼츠를 가져와서
      itemList.removeChild(a); //그 부모의 자식 엘리먼츠를 지워버린다.
    }
  }
}

//아이템 진열하기
function filterItems(e) {
  //convert to lowercase
  var text = e.target.value.toLowerCase();
  //get lis
  var items = itemList.getElementsByTagName("li");
  //conver to an array
  Array.from(items).forEach((item) => {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

//이건 좀 더 간단할듯 브라우저에 텍스트 추가

// 1.‘Home’이라고 적힌 <li> 태그를 생성하세요.

var li_home = document.createElement("li");
li_home.textContent = "Home";

// 2.insertBefore()를 사용해서 menu의 <li> 태그 앞에 'Home'을 삽입하세요.
let menu = document.getElementById("menu");
menu.insertBefore(li_home, menu.firstElementChild);

// 3. insertBefore()를 사용해서 calendar의 첫 번째 child로 예약 알람 문구를 삽입하세요.
var re = document.getElementById("calendar");
var re2 = document.createElement("div");
re2.innerHTML = "<strong>안녕하세요!</strong> 예약하신 날짜입니다.";
re.insertBefore(re2, re.firstElementChild);

// 4. removeChild()를사용해서 'Contact'라고 적힌 <li> 태그를 삭제하세요.
menu.removeChild(menu.lastElementChild); // ?

//음료 갯수 알람으로 띄우기

// 각 function마다 getElementById()와 getElementsByTagName()을 사용해서 index.html <body>내 각 div id에 해당하는 <p> 태그의 개수를 출력하세요.

function getAllParaElems() {
  var all = document.getElementsByTagName("p");
  var num = all.length;
  alert("전체 메뉴 종류는 " + num + " 개 입니다.");
}

function div1ParaElems() {
  var cold = document.getElementById("coldbrew");
  var cold_num = cold.getElementsByTagName("p");
  var num = cold_num.length;

  alert("커피 음료 종류는 " + num + " 개 입니다.");
}

function div2ParaElems() {
  var eso = document.getElementById("espresso");
  var eso_num = eso.getElementsByTagName("p");
  var num = eso_num.length;
  alert("에스프레소 음료 종류는 " + num + " 개 입니다. ");
}

//속성 추가하기

/*지시사항을 따라 작성해주세요*/
var target = document.getElementById("btn");

function changeButtonOnclick() {
  /*지시사항 1번*/
  target.classList.add("changeColor"); //이게 추가할 클래스(css에 속성을 적어두었다.)

  /*지시사항 2번*/
  target.innerText = "버튼 클릭 성공!";
}

/*지시사항 3번*/

target.addEventListener("click", changeButtonOnclick);

//줌인 줌아웃
/*지시사항을 따라 작성해주세요*/
const image = document.getElementsByClassName("zoom-img")[0];

function zoomIn() {
  /* 여기에 작성해주세요 */
  image.style.transform = "scale(1.2)";
  image.style.transition = "all 0.5s";
}

function zoomOut() {
  /* 여기에 작성해주세요 */
  image.style.transform = "scale(1)";
  image.style.transition = "all 0.5s";
}

/* 여기에 작성해주세요 */
image.addEventListener("mouseover", zoomIn);
image.addEventListener("mouseout", zoomOut);

// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하세요.
//이 문제 잘 모르겠음 => 이해했다 그냥 받아서 문자열 출력하는거구나.

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
    //카운트가 아직 0이면
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

//피라미드 별찍기 해볼까?
// 지시사항을 참고하여 코드를 작성하세요.

function pyramid(a) {
  var star = "";
  for (var i = 0; i < a; i++) {
    for (var j = a - 1; j > i; j--) {
      star += "&nbsp";
    }
    for (var k = 0; k <= i * 2; k++) {
      star += "*";
    }
    star += "<br>";
  }

  document.write(star);
}

//obj 내용 바꾸기
// 나라와 수도가 들어있는 country 딕셔너리 입니다. 수정하지 마세요!
var country = {
  대한민국: "서울",
  베트남: "하노이",
  브라질: "브라질리아",
  프랑스: "파리",
  미국: "워싱턴",
  칠레: "산티아고",
  체코: "프라하",
  러시아: "모스크바",
  중국: "베이징",
  스페인: "마드리드",
  이집트: "카이로",
  영국: "런던",
};

// 지시사항을 참고하여 코드를 작성하세요.

var chile = country["칠레"];

country.벨기에 = "브뤼셀";

delete country["중국"];

// 값을 확인하기 위한 코드입니다.
console.log(chile);
console.log(country);

//클릭하면 아래 <div>의 배경색이 변한다

/* 지시사항 1번을 참고하여 코드를 작성하세요. */

let pink = document.querySelector("#btnRabbit");
let purple = document.querySelector("#btnCat");
let orange = document.querySelector("#btnBird");

pink.addEventListener("click", function () {
  document.querySelector("#animal").style.backgroundColor = "pink";
});

purple.addEventListener("click", function () {
  document.querySelector("#animal").style.backgroundColor = "purple";
});

orange.addEventListener("click", function () {
  document.querySelector("#animal").style.backgroundColor = "orange";
});

//마우스오버 했을때 색바꾸기. 스타일을 바꾸지 않고 css에서 작성한 속성을 넣어줄수도 있다.

var blockOne = document.getElementById("red");
var blockTwo = document.getElementById("yellow");
var blockThree = document.getElementById("green");

/*지시사항을 따라 작성해주세요*/

function changeColor1() {
  blockOne.classList.add("red");
}
function changeColor2() {
  blockTwo.classList.add("yellow");
}
function changeColor3() {
  blockThree.classList.add("green");
}

blockOne.addEventListener("mouseenter", changeColor1);
blockTwo.addEventListener("mouseenter", changeColor2);
blockThree.addEventListener("mouseenter", changeColor3);

//화면 상단으로 스무스하게 이동하기. 이거 내 컴에서는 구현 안됨...

function scrollUp(e) {
  let tar = document.querySelector(e);

  tar.addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
}
scrollUp("#scroll-btn");

//입력받은 이름을 밑에 추가하기.. 이거 위에 나왔던거랑 비슷한

/*지시사항을 따라 작성해주세요*/

/*1. index.html 파일을 참고해 주어진 변수들 완성시키기*/

const target = document.querySelector(".attend"); //올바른 값을 작성해주세요.
const inputName = document.querySelector("input"); //올바른 값을 작성해주세요.
const attendee = document.querySelector("#attendee"); //올바른 값을 작성해주세요.

/*2. 입력받은 이름을 출석부에 나타내기*/

function attend() {
  attendee.innerHTML = inputName.value;
  /*여기에 작성해주세요.*/
}

target.addEventListener("click", attend);

//이런것도 있다. 정답 부분을 아예 바꾸기

// 지시사항을 참고하여 코드를 작성하세요.
let form = document.querySelector("#form");
let input = document.querySelector("#input");
let answer = document.querySelector("#answer");

form.addEventListener("submit", (e) => {
  e.preventDefault(e);
  answer.innerText = input.value;
  e.target.reset();
});

//문장 추가하기.
var myUl = document.querySelector("ul");

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.

for (let i = 0; i <= 20; i++) {
  let li = document.createElement("li");
  let ans = document.createTextNode(i + "번째 문장");

  li.appendChild(ans);
  myUl.appendChild(li);
}

//이 문제부터 좀 어렵다. 다시 반복해서 강의 보기.

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
    blue[i].style.color = "blue";
  }
}

// 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
function returnNormal() {
  var black = document.querySelectorAll("strong");
  for (let i = 0; i < black.length; i++) {
    black[i].style.color = "black";
  }
}

//불켜기. 이건 혼자 해보긴 했는데 다시 해보기.

//classList.add /remove/toggle/this

var a = document.querySelectorAll(".favorites-icon"); //박스가 모두 들어있다
document.querySelector(".favorites-icon");

function click() {
  for (var i = 0; i < a.length; i++) {
    if (a[i] != this) {
      a[i].classList.remove("on");
    }
  }

  this.classList.toggle("on");
}

for (var i = 0; i < a.length; i++) {
  a[i].addEventListener("click", click);
}

// var favoritesIcon = document.getElementsByClassName("favorites-icon");

// function handleClick() {
//   for (var i = 0; i < favoritesIcon.length; i++) {
//     if (favoritesIcon[i] != this) {
//       favoritesIcon[i].classList.remove("on");
//     }
//   }

//   this.classList.toggle("on");
// }

// for (var i = 0; i < favoritesIcon.length; i++) {
//   favoritesIcon[i].addEventListener("click", handleClick);
// }
