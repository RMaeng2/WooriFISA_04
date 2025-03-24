// var a; // 선언
// console.log(a); // undifined

// a = 1; // 할당
// console.log(a);

// var a = 3; // 선언과 할당 동시에
// console.log(a);

// let
// let a; // 선언
// console.log(a); // undifined

// a = 1; // 할당
// console.log(a);

// let a = 3; // 선언과 할당 동시에 : SyntaxError: Identifier 'a' has already been declared.

// a = 3;
// console.log(a);

// const
// const a; // 선언 - SyntaxError: Missing initializer in const declaration.
// console.log(a); // undifined

// const a = 1; // 선언과 할당을 동시에 해야지 방이 만들어짐
// console.log(a);
// a = 3; //TypeError: Assignment to constant variable.

const person = { name: "myeonghee" }; // name은 재할당 불가하지만 name안 값은 재할당 가능

// person.name = "jjanggu" // 이미 있는 key의 value를 변경 가능
// console.log(person);

// person = {name : "jjangA"} // TypeError: Assignment to constant variable.

// person = {name2 : "jjangA"} // TypeError: Assignment to constant variable.

var a = 1; // 정수
typeof a;

var a = 0.5; // 실수
typeof a;
console.log(a);

var a = 5e-5; // 지수표기법 가능
console.log(a);

// string
var a = "hello 한글";
console.log(a);
var a = "hello '한글'";
console.log(a);
typeof a;
var a = `Hello '${1 + 2}'`; // f-string처럼 백틱(``) + ${자바스크립트코드}
console.log(a);
// "Hello
// 안녕하세요." -> b 라는 var 변수에 넣고 출력해보세요.
var b = "hello \n 안녕하세요.";
var b = `hello
안녕하세요.`; // {``}은 """ """ 멀티라인 따옴표의 역할을 하기도 한다.
console.log(b[0]); // 자바스크립트의 배열도 0부터 시작, 슬라이싱은 안됨
console.log(b[-1]); // undefined 자바스크립트는 화면에 출력되기 만들어진 함수이기 때문에 없는 속성을 가리킬 때 화면에서 에러가 나는 것을 방지하기 위해 undefined가 나온다.
b.charAt(3); // 방번호로 해당하는 값을 호출

var c = "123";
typeof c;
// 형변환
Number(c); // str -> num로 형변환
var c = 123;
String(c); // num -> str로 형변환
Number("가나다"); // NaN - 숫자가 아닌 걸 숫자로 형변환 하는 경우
typeof NaN; // 자료형은 number이다. numpy의 broadcasting을 위해 NaN를 float 자료형으로 관리하는 것처럼
// boolean - true/false
Boolean(c); // 값이 있으면 다 true : [] 빈 배열, {} 빈딕셔너리 비어있는 참조 자료형은 : 값을 받을 준비가 되어있기 때문에 true 리턴
Boolean(); // 값이 없는 경우 false (조건문 만들 때 중요) : false, 0, () 빈값, '' 빈 문자열, undefined, null, NaN

// 4. null

var c = null;
console.log(c);
typeof c; // object로 자료형이 찍힘. 자바스크립트의 자체 버그, 수정하면 많은 사이트에 오류가 날 것 같아서 그대로 유지되고 있다.
Boolean(c); // 자료형이 object && false인 경우를 확인해서 null을 구분한다.

// 기본 자료형들을 바탕으로 조건문, 반복문, 클래스, 함수는 어떻게 작성하는지 확인해보자.
/* mathScore 란느 변수에 수학함수, engScore라는 변수에 영어점수를 입력 받고
그 결과를 avgScore라는 변수에 (mathScore+engScore)/2 
평균값을 저장합니다. 
*/
// 기본적으로 엔만한 데이터는 string으로 받는다.
// 형변환이 자동으로 되기 때문에 자료형에 따라 의도치 않은 결과를 얻을 수 있다.
// 형변환 해주고, 연산을 해주면 된다.
/* 연산자 우선순위 - 다른 언어와 같다.
1) () - 감싸준 연산자가 제일 상위에 동작
2) ** 제곱
3) - , 음수부호
4) * / %(나머지) //(몫)
5) +, - 연산이 동작
6) ++, --, a -= 1 a--(후위식) / --a(전위식)
*/
var a = 0;
++a; // 전위식 : 더하고서 현재 코드줄에서 사용 a+++;불가
a--; // 후위식 : 쓰고서 다시 a라는 변수에게 돌려줄 때 빼고 돌려줌
--a;
a += 2; // a= a+2
a *= 2;
a /= 2;
a %= 2; // 나머지연산

// 비교연산자
var a = 1;
var b = "1";
var c = "1";
typeof a;
typeof b;
a == b; // 값이 같으면 true
a === b; // 자료형과 값이 같은지 확인
a === c; // true
b === c; // false

true && true; // A도 참, B도 참
true || false; // A 또는 B가 참
!false; // 지금 상황과 반대

var date = new Date();
date.getFullYear();
date.getMonth() + 1; // 월은 0부터 시작함
date.getDate();

// if-else가 기본 로직
if (true) {
  // if (명제)
  console.log("참"); // 실행문
} else {
  console.log("거짓");
}

// if-else가 기본 로직
// if (true) { // if (명제)
//   console.log('참'); // 실행문
// } else if (false) {
//   console.log ('거짓');
// } else {
//   console.log('나머지 모든 경우')
// }

// // 현재 시간이 12시 보다 작은 시간이면 AM, 큰 시간이면 PM을 출력하는 시계를 만들어주셈
// if (date.getHours()<12) {
//   console.log(`AM ${date}`)
// } else {
//   console.log(`PM ${date}`)
// }

/* switch (명제) {
    case(1): 조건 만족시 실행문
              break;
    case(2): 조건 만족시 실행문
              break;
    default: 위의 모든 조건을 만족하지 못할 경우 실행문
              break; // 어차피 마지막이라 안 걸어도 되긴 함
}
명제에 true : 좀 더 유연한 비교가 가능해짐 / 명제에 값 : 좀 더 정확한 비교
딱 그 조건일 때만 실행이 된다. 정해진 그 값 자체를 가지고 비교를 해서 동작하도록 만들어야 함
*/

switch (true) {
  case date.getHours() < 12:
    console.log(`AM ${date}`);
    break;
  case date.getHours() >= 12:
    console.log(`PM ${date}`);
    break;
}

// if /switch 문으로 각각 작성해달라!
// 1. 짜장면 2. 짬뽕 3. 샐러드 중 하나를 받으면
// menu + 를 드시는군요.를 출력하고 셋 다 아니면 '그럼 뭐 드시게요?' 출력
// var menu = prompt(`뭘 먹고 싶으신가요?
// 1. 짜장면 2. 짬뽕 3. 샐러드`)

// if (Number(menu) == 1){
//   console.log('짜장면을 드시는군요.')
// } else if (Number(menu) == 2){
//   console.log('짬뽕을 드시는군요.')
// } else if (Number(menu) == 3){
//   console.log('샐러드를 드시는군요.')
// } else {
//   console.log('그럼 뭐 드시게요?')
// }

// // case문은 단일값을 비교하기 위해 만들어진 구문이라 ||, && 사용이 불가하다.
// switch (menu) {
//   case (Number(menu) === 1):
//   case (Number(menu) === 2):
//   case (Number(menu) === 3):
//     console.log(`${menu}을/를 드시는군요.`);
//     break;
//   default :
//     console.log('그럼 뭐 드시게요?');
//     break;
// }

// const mathScore = prompt('수학점수 입력')
// const engScore = prompt('영어점수 입력')
// const avgScore = (Number(mathScore)+Number(engScore))/2
// alert(avgScore) // 4045

// if / switch 문으로 각각 작성해주세요.
// 1. 짜장면  2. 짬뽕   3. 샐러드 중 하나를 받으면
// menu + 를 드시는군요. 를 출력
// 1, 2, 3 이 아닌 경우는 '그럼 뭐 드실래요?'를 출력해보세요.

// if문 switch의 차이
var menu = "짬뽕";
if (menu === "짜장면" || menu === "짬뽕" || menu === "샐러드") {
  console.log(`${menu}를/을 드시는군요.`);
} else {
  console.log("그럼 뭐 드실래요???");
}

// case문은 단일값을 비교하기 위해 만들어진 구문이라 || && 사용이 불가합니다.
switch (menu) {
  case "짜장면":
  case "짬뽕":
  case "샐러드":
    console.log(`${menu}를/을 드시는군요.`);
    break;
  default:
    console.log("그럼 뭐 드실래요???");
}

// 삼항연산자 - 불표현식 ? 참 : 거짓
menu = "짜장면";
menu === "짬뽕" ? `${menu}를 드시는군요` : "그럼 뭐 드실래요?";
Boolean(menu === "짬뽕" || menu === "짜장면" || menu === "샐러드")
  ? `${menu}를 드시는군요`
  : "그럼 뭐 드실래요?";
console.log(
  menu === "짬뽕" || menu === "짜장면" || menu === "샐러드"
    ? `${menu}를 드시는군요`
    : "그럼 뭐 드실래요?"
);

// /* Object(객체) 중 하나인 배열
//   - 순서대로 값을 저장
//   - 집합 자료형
//   - 순서대로 값을 꺼낼 수 있다. (index로)
//   - 자바스크립트의 배열 index는 0부터 시작된다.
// */
// // 배열을 만드는 3가지 방법
// var array = []
// var array2 = Array()
// var array3 = new Array()
// typeof array3

// // array1이라는 배열을 만들고 apple, banana, carrot 세개의 문자열을 각 index에 넣어보세요.
// // JS의 배열은 자료형 구애를 받지 않는구나.
// var array1 = ['apple', 'banana', 'carrot', 1.2, [1,2,3], {'가': 1.3}, 12, true, null, undefined, NaN]
// typeof array1
// array1

// var array1 = ['apple', 'banana', 'carrot']
// array1.push('donut') // 맨 뒤에 값 추가
// array1.unshift('aa') // 맨 앞에 값 추가
// array1.pop() // 맨 뒤의 값 삭제
// array1.shift() // 맨 앞의 값을 삭제
// array1[2] = 'cat'// 값 수정
// array1.push('bee')
// array1.sort() // 정렬: 결과를 자기 자신에게 리턴 - 파괴적인 함수
// var array2 = [3, -1, 556, 7, null, 0.3, -325, NaN, undefined]

// array2.sort(function (a, b) {
//   return a - b;}) // JS의 sort는 기본적으로 유니코드로 정렬을 합니다. 숫자는 어떻게 정렬해야 할까요? 오름차순

// Number(null) // 0으로 형변환되기 때문에

// array2.sort(function (a, b) {
//   return b - a;})  // 내림차순

// var array2 = [3, -1, 556, 7, null, 0.3, -325, NaN, undefined]
// array2.sort(function (a, b) {
//   return b - a;})  // 내림차순
// // filter 는 true / false로 판단해서 true인 결과의 index만 리턴하는 방식으로 동작
// function isNum(value) {
//   return (value !== null) && !isNaN(value) && (value !== undefined)
// }
// // NaN은 숫자가 아닌 걸 숫자로 형변환하려고 할 때 변환되는 number 자료형의 특수값. 원래 어떤 값이 들어왔는지 알 수 없기 때문에 예외적으로
// Number('안녕하세요') === Number('사과')
// NaN === NaN // false를 리턴한다.
// array2.filter(isNum);

// var array3 = ['apple', 'banana', 'carrot',,,,'giraffe'] // 0, 1, 2, 6번 방에는 할당
// console.log(array3[7]) // undefined

// var array4 = ['apple', 'banana', 'carrot',null,null,null,'giraffe']
// console.log(array4[3]) // 만들었는데 일단 비워놓은 방(내가)
// console.log(array4[7]) // 아직 만들지도 않은 방(자바스크립트가)

// // 요소 삭제
// array4.splice(3, 3)
// array4

// // 요소 추가
// array4.splice(3, 0, 'donut', 'eel')
// array4

// // 요소 수정
// array4.splice(2, 1, 'cat')
// array4

// Set(집합) - 중복을 걸러내는 유형. new Set([1,3,4,5,6,6])
var set1 = new Set([1, 3, 4, 5, 6, 6]);
set1.add(8);
set1.delete(5);
set1;
typeof set1;

// Dict - 따로 자료형으로 불리우지는 않고 Object type인데 key(기본 자료형)로 value를 부르는 종류의 object 타입을
var dict1 = {
  가: "가위",
  나: "나비",
  다: "다람쥐",
  1: 1010,
  true: { 1: "가" },
}; // {'x':1}: 369
dict1["가"]; // dict['key']
dict1.가;
Object.keys(dict1); // key만
Object.values(dict1); // value만
"나비" in dict1; // false dict에서는 key 중심으로 움직이기 때문
"나" in dict1; // true
Object.entries(dict1); // [[key1, value1], [key2, value2] ....)
dict1["나"] = "나풀나풀"; // 이미있는 key면 수정
dict1["마"] = "마이마이"; // 없는 key면 삽입
delete dict1["마"]; // dict 안의 key 삭제
console.log(dict1.size);

/* Map: dictionary와 마찬가지로 키-값으로 쌍을 저장합니다. 키로 값을 꺼내 씁니다.
- 키로 모든 데이터 타입을 받아줍니다. 
- 삽입 순서대로 요소를 반복할 수 있습니다.
- size 속성을 사용해서 요소의 개수를 확인할 수 있습니다.
- set() get()으로 삽입, 조회를 할 수 있습니다.
- 뎁스가 복잡하거나, 데이터의 입력 순서, 양이 많을 때 
*/
var map1 = new Map();
map1.set("key1", "value1");
map1.set(true, "value2");
map1.set({ x: 1 }, "value3");

map1.get("key1");
map1.get(true);
map1.get({ x: 1 }); // 안나옴 {x:1}
const a = { x: 1 }; // 참조자료형
const b = { x: 1 };

a === b; // false
map1.set(a, 369);
map1.get(a);
