const canvas = document.querySelector("canvas");
const lineweidth = document.querySelector(".line-weidth");
const canvascolor = document.querySelector(".canvascolor");
const colorOption = Array.from(document.getElementsByClassName("colorOption"));
const fillbtn = document.querySelector(".fillbtn");
const Eraser = document.querySelector(".Eraser");
const Eraserbtn = document.querySelector(".Eraserbtn");

const inputFile = document.querySelector(".file");
const text = document.querySelector(".text");

const save = document.querySelector(".save");
//.getContext 로 2d 로 그릴지 3d(web gl)로 그릴지 선택할 수 있다.
const ctx = canvas.getContext("2d");

//canvas 안에 그릴 이미지의 퀄리티를 높이기 위해
//css가 아닌 자바스크립트에서 크기를 설정해주고, 수정한다.
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineweidth.value; //기본 선은 선굵기의 기본값.
ctx.lineCap = "round"; //선 끝을 둥글게.

let isPaint = false;
let isFill = false;

function moveOn(event) {
  if (isPaint) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  } else {
    ctx.moveTo(event.offsetX, event.offsetY);
  }
}

function colorcell(event) {
  return (ctx.strokeStyle = event), (ctx.fillStyle = event);
}

function onMousedown() {
  isPaint = true;
}

function onMouseup() {
  isPaint = false;
}

function lineChange(event) {
  ctx.beginPath();
  ctx.lineWidth = event.target.value;
}

function onColorchange(event) {
  ctx.beginPath();
  colorcell(event.target.value);
  //ctx.strokeStyle =
  //ctx.fillStyle = event.target.value;
}

function onColorClick(event) {
  ctx.beginPath();
  colorcell(event.target.dataset.color);
  canvascolor.value = event.target.dataset.color;
  //ctx.strokeStyle = ctx.fillStyle = event.target.dataset.color;
}

function onModeclick() {
  if (!isFill) {
    isFill = true;
    fillbtn.innerText = "Line";
  } else {
    isFill = false;
    fillbtn.innerText = "Fill";
  }
}

function onCanvars() {
  if (isFill) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function onclear() {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function onEraser() {
  ctx.beginPath();
  ctx.strokeStyle = "white";
  isFill = false;
  fillbtn.innerText = "Fill";
}

//파일올리기
function onFile(event) {
  const files = event.target.files[0];
  //멀티플 속성을 이용하면 여러개 올라가지만 여기서는 하나만 올리니까 0번째에 있음
  const url = URL.createObjectURL(files);
  const image = new Image(); // creatElements 쓴거랑 같다. <img>랑 똑같음
  image.src = url; //img src = ~
  image.onload = function () {
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height); //이미지 위치와 크기 맞춰줌
    inputFile.value = null;
  };
}

//텍스트 입력하기
function onDoubleclick(event) {
  ctx.save(); //기존 상태 저장
  const intext = text.value;
  if (text !== "") {
    ctx.lineWidth = 1; //값 바꾸고
    ctx.font = "60px serif";
    ctx.fillText(intext, event.offsetX, event.offsetY);
    ctx.restore(); //save 헀던 상태로 돌아감
  }
}

//그린 이미지를 저장해주는 함수
function onsave() {
  const url = canvas.toDataURL(); //그린 이미지를 url로 바꿔서
  const a = document.createElement("a"); //링크 생성
  a.href = url; //경로도 생성해주고
  a.download = "myDraw.png"; //다운로드 속성으로 이미지 이름 설정
  a.click(); //링크를 클릭하면 다운로드됨
}

canvas.addEventListener("dblclick", onDoubleclick); //더블클릭하면 실행되는..
canvas.addEventListener("mousemove", moveOn);
canvas.addEventListener("mousedown", onMousedown);
canvas.addEventListener("click", onCanvars);
canvas.addEventListener("mouseup", onMouseup);
canvas.addEventListener("mouseleave", onMouseup);
lineweidth.addEventListener("change", lineChange);
canvascolor.addEventListener("change", onColorchange);
colorOption.forEach((color) => color.addEventListener("click", onColorClick));
fillbtn.addEventListener("click", onModeclick);
Eraser.addEventListener("click", onclear);
Eraserbtn.addEventListener("click", onEraser);
inputFile.addEventListener("change", onFile);
save.addEventListener("click", onsave);

//----마우스가 움직일때마다 선을 그어줌------------

// const colors = [
//   "#ff7979",
//   "#ffbe76",
//   "#f6e58d",
//   "#badc58",
//   "#686de0",
//   "#be2edd",
// ];

// function onClick(event) {
//   ctx.beginPath();
//   ctx.moveTo(Math.floor(Math.random() * 800), 0);
//   const color = colors[Math.floor(Math.random() * colors.length)];
//   ctx.strokeStyle = color;
//   ctx.lineTo(event.offsetX, event.offsetY);
//   ctx.stroke();
// }

// canvas.addEventListener("mousemove", onClick);

//-----------------------------------------------------------

//좌표는 왼쪽 맨 위 캔버스의 끝이 0.0이고 x축 y축으로 나간다.

//fillRect: 채워진 사각형을 만드는 함수.
//x, y, 가로, 세로 크기가 됨

//rect : 비워진 사각형을 만드는 함수. 색을 정해줘야 보인다.
//stroke 혹은 fill로 채울 수 있다.
//fillStyle 로 색을 바꾸면 같은 경로의 도형 색이 모두 바뀐다.
//이를 방지하기 위해 .fill로 색을 채워넣은다음
//.meginPath 로 관계를 끊어주면 다음 라인의 요소에 색상이 먹히지 않게 된다.
// ctx.stroke();
// ctx.rect(150, 150, 100, 100);
// ctx.fillStyle = "red";
// ctx.fill();

//.moveTo : 해당 위치로 브러쉬 이동시켜주기
//lineTo : 이동한 위치에서 원하는 곳까지 라인 그려주기

//집모양 만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.fillRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.fill();

//사람모양 만들기
// ctx.fillRect(210 - 40, 200 - 30, 15, 100);
// ctx.fillRect(350 - 40, 200 - 30, 15, 100);
// ctx.fillRect(260 - 40, 200 - 30, 60, 200);
// ctx.arc(250, 100, 50, 0, 2 * Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = "white";
// ctx.arc(260 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.arc(220 + 10, 80, 8, Math.PI, 2 * Math.PI);
// ctx.fill();
