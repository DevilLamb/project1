//getElementBy~ 와 querySelector 의 차이

document.getElementById(); //id 선택자는 웹 문서에서 하나만 사용 가능하기 때문에 s가 붙지 않는다.
document.getElementsByClassName; //class는 tagname과 마찬가지로 여러번 사용이 가능하기 때문에 s를 붙인다.
document.getElementsByClassName()[0]; //접근할 때는 인덱스[] 혹은 선택자 > 로

document.querySelector(); //는 요소 노드 뿐만 아니라 텍스트 노드와 속성 노드까지 접근 가능.
//즉 웹 요소 뿐 아니라 텍스트, 속성 변경, 새로운 노드를 추가하고 싶으면 꼭 querySelector(All)를 쓰자.

//속성에 접근해서 내용을 바꾸고 싶다면.
//
document.querySelector(".grim").getAttribute("src"); // getAttribute 를 쓰면 src의 태그 속성 내용을 가져와준다. 즉 이미지 주소를 가져온다.
document.querySelector(".grim").setAttribute("src", "img/grim2.png"); //setAttribute를 쓰면 태그의 속성 변경이 가능하다.
