console.log('connected');


// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합
// - 2단계 : 함수 정의(생성) -> 함수 표출(사용)


//함수 정의
// function funtionName(){
//     // do something
// }

//함수 호출
// functionName()

//정의
function helloWorld(){
    console.log('helloworld');
}
helloWorld();
const helloworld2 = function(){
    console.log('helloworld2');
}
helloworld2();

// return 키워드
// : 반환값 -> 함수 내부 코드의 "최종 결과값"
// 함수 내부 코드의 최종 값을 저장하고 보관하라고 등장한 키워드
function helloWorld3(){
    return "helloworld3";
}
console.log(helloWorld3());

const helloWorld4 = function(){
    return "helloworld4";
}
console.log(helloWorld4());


//다양한 함수 만들기
// case1. 매개변수(인자) 1개
function hello1(text){
    return text;
}

console.log(hello1("안녕"));
//case2. 매개변수(인자) 2개
function hello2(text, name){
    // let result = text+name
    let result=`${text} 나는 ${name}이야`;
    return result;
}
console.log(hello2('안녕?','Sean'))

//case3. return 없이 함수에서 바로 console.log() 찍기
function hello3(text, name){
    console.log(`${text} 나는 ${name}이야`);
}
hello3('안녕???','Lily')

// case4. case2를 함수표현식 hello4
const hello4=function(text,name){
    let result=`${text} 나는 ${name}이야`;
    return result;
}
console.log(hello4('안녕?','Sean'));

// case5. case3을 함수 표현식 hello5
const hello5=function(text,name){
    console.log(`${text} 나는 ${name}이야`);
}
hello5('안녕???','Lily')

// 주의
// - 하나의 js 파일에서 동일한 함수의 이름을 정의하지 않기
// - 항상 함수를 정의 -> 호출 


function countNum(){
    let count=7;
    console.log("count 값 : ", count);
}
countNum();
// console.log("count 값 : ", count);
// 함수 안에서 선언한 변수는 함수 안에서만 유효하다
// 지역변수는 함수의 body를 벗어나면 접근할 수 없다


let count2=0;
console.log("count2 값1 : ", count2);
function countNum2(){
    count2=77;
    console.log("count2 값2 : ", count2);
}
countNum2();
console.log("count2 값3 : ", count2);
// 만약 함수 안에서 사용되는 변수가 함수 바깥에서도 쓰인다면
// 전역변수를 활용

let color = 'red';
function printColor(){
    let color = 'green';
    console.log(color); //green
}
printColor();
console.log(color); //red
// 지역변수와 전역변수의 이름이 동일한 상황,
// 함수 안에서는 지역변수를 사용

let animal = 'dog';
function who() {
  let animal = 'cat';
  console.log(animal);  //cat
}
who();
console.log(animal);  //dog


// ##########################################################################
//                        문자열 속성과 메서드 (함수)
// ##########################################################################
// 자바스크립트에서 기본 제공하는 문자열(string)에서 사용 가능한 편리한 기능

console.log('--------')

//속성
//length : 문자열 길이
var song1 = "Strawberry Moon";
var song2 = "Strawberry Moon!!";
console.log(song1.length); //song 변수의 문자열 길이
console.log(song2.length); //공백, 기호 다 포함

// xx.method() 형태
// - toUpperCase()
// - toLowerCase()
// - trim() : 양끝 공백 제거
var msg = "Happy Birthday~";
var userId = '       user123   ';
console.log(msg.toUpperCase());
console.log(msg.toLowerCase());
console.log(userId.trim());
console.log(userId.length);
console.log(userId.trim().length);

// 참고! 연달아서 사용 가능
var msg2 = "   hello world!  !!      "
console.log(msg2.trim().toUpperCase());
console.log(msg2.trim().length);

// 인덱싱 (Indexing)
// string에서 한 글자를 선택
// 변수명[위치값]
// 위치값 : 숫자 0부터 시작
console.log(song1[0]+song1[1]+song1[2]);
console.log(typeof(song1[0]));
console.log(song1[0].length);
console.log(song1[0]+song1[12]+song1[14]+song1[14]+song1[9]);

// xx.method(arg) 형태
// - indexOf(x) : string에서 x가 나타내는 인덱스(위치값)를 반환, x가 없다면 -1 반환
// - slice(startIndex) : startIndex부터 끝까지 문자열을 잘라내어 반환
// - replace()
console.log('--------')
var fruit = 'applemango'
var msg = 'Wow~ It is so amazing~~~!!';
console.log(fruit.indexOf('l'));
console.log(fruit.indexOf('mango'));
console.log(fruit.slice(5));
console.log(fruit.slice(-1)); //인덱싱 번호는 음수도 가능
console.log(fruit.replace('l','I'));
console.log(msg.replace('Wow','Hey'));
console.log(msg.replaceAll('a','A'));

// 퀴즈1) 2022.9.26 -> 2022-9-26
// 퀴즈2) 2022.9.26 -> 22-9-26
let date = '2022.9.26';
console.log(date=date.replaceAll('.','-'));
console.log(date.replace('20',''));
