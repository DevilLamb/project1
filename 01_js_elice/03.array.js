let arr = [1, 2, 3, 4]; // 베열 리터럴(순수한 ,단순한)
console.log(arr);
let array = new Array(3); //생성자 함수. 3개짜리 빈 공간을 가진 배열 만들어.
console.log(array);
array = new Array(1, 2, 3);
console.log(array);
array = Array.of(1, 2, 3, 4, 5); //of 로도 생성 가능.
console.log(array);

//값추가
let subject = [];
console.log(subject);
subject[0] = "javascript";
subject[1] = "html";
subject[2] = "css"; //빈 배열에 이런식으로 값을 넣을 수 있다.
subject[3] = "java";
subject[5] = "python"; //순서를 건너뛰어서 만들 수도 있다. 사이에 빈 방 만듬.
console.log(subject);
// console.log(subject.length);

// 값 삭제
delete subject[1];
console.log(subject); //delete한 인덱스의 값만 삭제함.
