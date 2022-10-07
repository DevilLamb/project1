//심볼 자료형? 얘 뭔데

const { fileURLToPath } = require("url");

//쓸.데.없.어.♡

var 심볼 = Symbol('설명');
//이게끝임

//하지만 오브젝트 자료형의 비밀스런 키값으로 쓰는거라구

var bianca = {name : 'bibi'; age: 30;};
bianca.like = star; //이러면 그냥 추가되어서 죄다 보이는거잖아?

var love = Symbol('비앙카애인'); //이러면 끝남


//원래 오브젝트의 키값은 문자만 가능했는데 이제 아님
//이게 이런뜻

bianca[love]=100;
//심볼로 저장한 러브라는 밸류를 저장할 수 있어
//완전 시크릿~ 밖에서 보이지 않아.

for(var key in bianca){
    console.log(bianca[key])
} //이거 돌려도 심볼인 love 키는 안나옴!!!!


//주석을 달거나.. 그런거야!

//왜 심볼은 반복문 안돌아? 이뉴머러블 없어서.

var height = Symbol('비앙카 키임');

bianca[height] = 180;
//symbol(비앙카 키임) : 180 이렇게 나옴

//직접 오브젝트 안에 
[height] : 180 //<- 이렇게 넣어도 된다!


//장점
//임포트 해 온 파일이나 라이브러리 쓸 때
//그 안의 오브젝트에 자료를 추가하고 싶다면
//심볼을 쓰면 기존 코드를 해치지 않고 추가할 수 있으니까 좋음

//심볼의 특징 1. 설명이 같다고 해서 같은 심볼이 아님

var a = Symbol('설명1');
var b = symbol('설명1');

a === b //=>false. 심볼은 각각 유니크한 설명을 가지기 때문에!

//전역변수같은 전역 symbol
//여러 객체에 심볼을 함께 주고 싶다면

var c = symbol.for('설명1'); // 이러면 되는데
var d = symbol.for('설명1'); //이렇게 하면 
d = c; //이 뜻이 되어버림!! 전역심볼은 설명이 같으면 그냥 복사해온다.

a === d //true


//심볼의 특징 3, 기본 내장 심볼들

var 어레이 = [2,3,4];
어레이[Symbol.iterator]; //이러면 심볼값이 이터레이터로 나오네?
//이건 어레이에 집어넣어준 기본 심볼임!!





