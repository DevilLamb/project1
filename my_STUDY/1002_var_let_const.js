
//변수는 왜 만들까? => 잠깐 자료를 임시 저장하는 공간. 나중에 쓸거야!
//변수의 특징 : 선언, 할당, 범위, 호이스팅

var : 재선언O, 재할당O, 범위 function <= 함수 안에서만 존재함!

let : 재선언X, 재할당O, 범위 {} <= {이 안에서만 존재함! 범위 더 좁음.}

const : 재선언x, 재할당x, 범위 {} <={마찬가지로 이 안에서만 존재함.}

//만약 오브젝트 값도 변경하고 싶지 않으면?

Object.freeze(오브젝트명) => //이러면 오브젝트 안의 값도 변경 불가!

//호이스팅의 경우

//호이스팅? 변수의 선언을 범위 맨 위로 끌고오는 현상!
//다만 선언만 끌고오고 값은 끌고오지 않아..!

//변수 여러개 만들기

var 나이 = 20, 이름 ='ㅁㅁ', 성별;
//이런식으로 해도됨!!


//전역변수 :  모든 곳에서 쓸 수 있는 변수.
//위에서 설명한 함수나 {} 밖에서 선언하면 안에서도 자유룝게 사용 가능!

//window로 전역변수 만들 수도 있어!

window.이름 = '비앙카' //이런식으로 만들면 전역변수가 됨!

window.이름 = function(){} <=함수도 담기 가능


//함수도 호이스팅 일어남!

//그럼 예제?

if(true){
    let a = 1;
    var b = 2;
    if(true){
        let b = 3; //let의 선언 범위는 {}이기 때문에 여기서만 쓰고 사라짐.
    }
    console.log(b) => 이거 정답은? // 2!!
}





//Template literals 문자열 다르게 제작하기

//백틱 그냥 `${}` 이거 쓸려고 썼었지?
//근데 `` 이 백틱 안에 넣으면 엔터키도 가능!!
//게다가 중간에 변수 넣기도 쉬움!!

//html작성에 유용하다!!

//tagged literal 도 있다?

var 변수 = '비앙카';
var 문자 = `사르디나의 ${변수}입니다.`;

function 함수(){
    return 5;
}

함수`저는 사르디나의 ${변수}입니다.` 

//괄호없이도 백틱을 사용하면 이렇게 사용가능해!! 신기!!
//=>근데 이제 함수가 실행되니까 문장이 아니고 5가 남겠지? ㅎㅎ
//이 기능을 잘 쓸 수 있으려면

function 해체분석기(문자들, 변수들){
    console.log(문자들);
    console.log(변수들);
}

해체분석기`사르디나의 ${변수}입니다.`
//이거 출력하면 뭐가 나올까?

//=>['안녕하세요','입니다'] 와 비앙카 가 나옴. 신기해

//왜? 
//1. 파라미터1의 문자들을 어레이화 해줌
//2. 파라미터2의 변수들을 모아줌
//3. 변수 여러개 따로 빼고 싶으면 파라미터 늘려주면 됨. 변수 순서대로 모아줌.
//해체 기준? ${}. 이 양 옆 문자들은 어레이, 변수는 모아줌.

//글자 순서 변경하고 싶으면?

function 해체분석기(문자들, 변수들){
    console.log(문자들[1]+문자들[0]);
}

해체분석기`사르디나의 ${변수}입니다.` => 이러면 됨!!
//이러면 입니다사르디나의 가 출력됨

//완전 편한데?
//하지만 실생활에서는 잘 안씀~



// Spread Operator = ...
//펼쳐서 늘어놓고 싶다~ = 점 세개 붙이기

var arr = ['hello','world'];

console.log(...arr) //[] 이거 빼서 헬로 월드 로 나온다!

//문자 스프레드하면?

var 문자 ='안녕하세요'
console.log(...문자) //안 녕 하 세 요 <-라고 해체되어서 나옴!


//어디에 쓸까?

var a = [1,2,3];
var b = [4,5];

var c = [...a]; // [1 , 2 , 3]
var d = [...a , ...b]; //[1,2,3,4,5]

//어레이 두개 합치거나 복사할때 유용해! 자주  쓴다구

//특히 깊은복사할때 유용해
//그냥 a = b 로 복사하면 값을 공유하게 되는(=얕은 복사) 데,
//a = [...b] 하면 깊은복사가 되어서 독립적으로 그냥 복사된다!
//원 어레이를 수정해도 복사한 어레이는 바뀌지 않음

//오브젝트도 합쳐보자

var o1 = {a : 1 , b: 2};
var o2 = {...o1, c:3} //이러면 { a : 1 , b: 2 , c : 3}
//오브젝트 복사해서 합치기도 쉬워


//주의사항! 값 중복이 일어나면?
var o1 = {a : 1 , b: 2};
var o2 = {a:2, ...o1} //이럴 경우 그냥 a:1 이 된다?

//왜? 가장 뒤에 있는걸 적용해주기 때문에!!
//...o1, 하고 앞에 넣어주면 뒤에 있는 a:2 가 된다.


//주의사항 2.
//...은 (),{},[] 여기 안에만 쓰자!!


//활용법 2

//함수 파라미터를 넣어보자!

function 더하기(a, b, c){

    console.log(a+b+c);

}

//이런 함수가 있을 때

더하기(1,2,3); //보통 이러면 되지만

var arr = [10,20,30];//이런 어레이가 있다면?

더하기(...arr); //이러면 된다구!!
더하기.apply(undefined,arr) //이래도 똑같은거임. 근데 언디파인드는 뭐야?
//어플라이 쓸 때 앞에 언디파인드면 그냥 실행해줘~ 라는 뜻. 그리고 파라미터를 어레이로 받을 수 있어서
//저렇게 복잡하게 쓰게 되어버린거임!
//즉 이게 옛날방식.



//즉 어레의 내의 모든 데이터를 파라미터로 집어넣고 싶은 경우에 써!


//여기서 잠깐

//.apply 이런 함수가 있다.

var 사람 = {
    인사 : function(){
        console.log(this.이름 + '안녕')
    }
}

var 사람2 = {
    이름 : '김'
}


//이런게 있을때 사람의 함수를 사람2에 적용하고 싶을때!

사람.인사.apply(사람2)
//이러면 사람2에도 인사를 쓸 수 있어!
//그래서 김안녕이 돼!

사람.인사.call(사람2) //call도 똑같이 기능해!

//만약 파라미터를 넣고 싶으면

사람.인사.apply(사람2, [1,2]) //=>얘는 어레이 형태로 파라미터를 넣을 수 있고
사람.인사.call(사람2,1) //=>얘는 안됨

//아무튼 이건 옛날방식임...!




//함수 업그레이드 해보자!
//default parameter/arguments

function 더하는애(a,b){
    console.log(a+b)
}

더하는애(1,2); //3

//만약 파라미터 2를 빼먹어도 에러 안 남. 그냥 1임.

//이제 default 파라미터에 대한걸 배워보자


function 더하는애(a,b = 10){ //b자리에 아무것도 안 넣으면 10 넣어줘!!
    console.log(a+b)
} 

더하는애(1);//10됨! 왜냐 b디폴트가 10이니까.
더하는애(1,2);//3. 이렇게 써도 됨. 그냥 디폴트를 줄 뿐이니까!


function 더하는애(a,b = 1*2) //연산자도 되고 


function 더하는애(a,b = 2*a) //심지어 이렇게도 되고


function 임시함수(){
    return 10;
}

function 더하는애(a,b = 임시함수())//함수도 넣을 수 있어!!



//함수의 arguments

function 함수(a,b,c){ //=> 파라미터
    console.log(a,b,c); //=> 아규먼트
}

//모든 파라미터를 한꺼번에 싸잡아서 다루고 싶을 때?

function 함수(a,b,c){
    console.log(arguments); //이렇게 쓰면 된다구!
}

함수(1,2,3) // 함수의 arguments 때문에 [1,2,3] 이렇게 어레이로 반환한다구!

arguments[0] //...이런식으로 출력도 가능해!

//입력한 파라미터를 죄다 콘솔창에 넣어주세요 하면?

function 마구마구(...arr){
    for(var i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
    } 
} //와 이러면 모든 파라미터를 콘솔창에 하나씩 찍어주겠다!!


//근데 arguments는 옛날문법이었어...!! 헛점이 있다구. 
//만약 파라미터 하나를 빼고 쓰고싶다면..불가능해..

//Rest 파라미터

function rest(...파라미터들){ //파라미터 자리에 ... 세 개 쓰면 레스트 파라미터!
    console.log(파라미터들);
} //이러면 함수 안에 들어온 모든 파라미터를 [파라미터들] 이렇게 어레이에 담아준다!!

rest(1,2,3); //[1,2,3] 이렇게 된다는 소리.

//차이점은 뭐야?

function rest2(a,b, ...파라미터들){ //이렇게 쓸 수 있다는 것! 
    console.log(파라미터들);
} //즉 들어온 파라미터 중에 앞에 a,b 얘네 빼고 다 배열로 묶어줘!

rest2(1,2,3,4,5); //[3,4,5] 이렇게 된다는 소리!!


// ...이 함수 파라미터 자리에 오면 rest , 아니면 스프레드.

//예제 하나?

function 함수펼치기(...어떤어레이){
    for(var i = 0; i < 어떤어레이.length; i++){
        console.log(어떤어레이[i])
    }
}

함수펼치기(1,4,5,3,8,5); //이러면 일일이 콘솔창에 하나씩 찍어주는 함수!



//주의점 : ...파라미터를 가장 마지막에! 가장 뒤에 써야함!
//한 번만 쓸 수 있어. 두 번 안됨. 세 번도..



//Reference data type ??
//primitive data type ??

//primitive data type = 변수에 값이 그대로 저장되는.. 보통 쓰는 애들.


var 변수 = 123 //프리미티브 데이터 타입. 변수에 123이 저장되었다.

var 어레이 = [1,2,3] //레퍼런스 데이터 타입! [1,2,3]이 저장된게 아니야..! 그럼 뭐가?

//즉, 화살표. [1,2,3] 이 저기에 있어~ 하는 화살표가 저장됨!

// arr, obj 가 레퍼런스 타입임.

//primitive data type 은 변수에 저장되는거라

var a = 1; //1
var b = a; //1
a = 3; //a=3,b=1

//이렇게 얕은복사가 된다.


//하지만 레퍼런스 데이터 타입은 무조건 깊은복사라서~ 
//즉 화살표라서 화살표 방향이 바뀌면... 같이 바뀌어..
//그러니까 오브젝트나 어레이 자료는 이렇게 복사하지 말자!!

var 이름1 = { name : 'kim' };
var 이름2 = { name : 'kim' };

이름1 == 이름2 //트루!? => 아니야 falsae!!
//왜? '화살표'가 저장되기 때문에!! 만들때마다 다른 화살표가 생기기 때문에 같은 자료가 아니라고 함!!


var 오브젝트 = { name : 123 };

function 변경기계(obj){
    obj.name = 456
} 

변경기계(오브젝트)//이러면 오브젝트 name이 변경되는데

function 변경기계(obj){
    obj = { name : 456 }
} 

변경기계(오브젝트)//이러면 변경 안됨!! 왜?

//파라미터라는건 임시변수를 만들어주는거라
// 결국 'var obj = 오브젝트' 라고 쓴거랑 똑같음!!
//이거 얕은복사잖아? 이미 얕은복사를 해 온 상태라구.
//그럼 obj = { name : 456 } 이건 이대로 만들어진거고

변경기계(오브젝트)//이걸 하면

function 변경기계(오브젝트){//여기 오브젝트가 들어와서 복사된담에
    오브젝트 = { name : 123 };//복사된 원래 오브젝트를 다시 리턴해준거임
} 



//constructor 는 오브젝트 생성기계다!
//용도가 뭐지? 이걸 잘 알아야돼!

var 사람 = {
    name : '123',
    age : 20,
} 

//이 틀을 똑같이 여러명 만들고 싶어...

//그럼 여러번 찍어내면 돼! constructor로.

//
function People(){
    this.name='kim'; //새로 생성되는 오브젝트의 이름에는 김을 넣어 주세요
    this.age = 15; //새로 생성되는 오브젝트의 나이는 15에요
} //이게 오브젝트기계인 constructor 문법이다!!

new People(); //=> 이러면 새로운 오브젝트가 뽑힌다!!

var 학생1 = new People(); //이렇게 써!!

//이거 반복문 돌려서 여러번 만들수도 있다. 대단해~

//함수 기능 추가도 하고싶어!!


function 새로운학생(){

    this.name = 'kim';
    this.age = 15;
    this.sayHi : function(){
        console.log(`안녕하세요 ${this.name} 입니다.`);
    }

} //이러면 새로 만들어지는 오브젝트들도 함수 쓸 수 있어!

//근데 이러면 이름이 막 똑같아 뭐야

function 사람기계(구멍, 구멍2){
    this.name = 구멍;
    this.age = 구멍2;
    this.sayHi = function(){
        console.log(`안녕하세요${this.name}입니다`),
    }

}

var 새로운사람 = 사람기계('김',20) //이런식으로 하면 된다~
//얘가 인스턴스!!


새로운사람.sayHi(); //=>안녕하세요 김입니다 나옴

//콘스트덕터는 , 아니고 ; 쓴다!! 이거 중요.







