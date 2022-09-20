// 배열의 함수들

const animals = ['고양이', '강아지', '토끼'];

console.log(Array.isArray(animals));
console.log(Array.isArray({}));

console.log(animals.indexOf('토끼'));

console.log(animals.includes('뱀'));

// 배열 자체를 수정

//  제일 뒤 추가됨
let addItem = animals.push('호랑이');
console.log(animals);

// 제일 앞 추가됨
addItem = animals.unshift('사자');
console.log(animals);

// 제일 뒤에 제거됨
let delItem = animals.pop();
console.log(animals);

// 제일 앞에 제거됨
delItem = animals.shift();
console.log(animals);

// 배열 자르기
const updateItem = animals.splice(2, 1);
console.log(animals);
console.log(updateItem);
animals.splice(1, 2, '곰', '말', '양');
console.log(animals);

console.log('============');
//----------------------- 기존 배열 건들이지 않음

let newArr = animals.slice(0, 2);
console.log(newArr);
console.log(animals);
newArr = animals.slice(-3, -2);
console.log(newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log(arr1);
console.log(arr2);
console.log(arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log(arr4);
console.clear();

// 중첩 배열 한개로
let arr = [
	[1, 2, 3],
	[4, [5, 6, [7, 8]]],
];
console.log(arr);
console.log(arr.flat(3));
arr = arr.flat(3);
//---------------------------------------------

arr.fill(0);
console.log(arr);

arr.fill('s', 2, 3);
console.log(arr);

arr.fill('a', 1);
console.log(arr);

// 배열 -> 문자열
let text = arr.join();
console.log(text);
