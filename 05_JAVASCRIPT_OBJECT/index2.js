console.log("connected");

// JS 표준 내장 객체
// 기본적으로 (이미) 가지고 있는 객체
// Stirng, Number, Array, Date, Math, ...

// ##########################################################################
//                                Date 객체
// ##########################################################################
// 시간, 날짜에 대한 정보를 얻기 위함
let now = new Date();
console.log(now);
console.log(new Date(0));       //1970-01-01 09:00:00를 기준으로
console.log(new Date(8000000));   //8000000ms가 지난 날짜
// new Date(y, m, d, h, m, s, ms);
// y : 4자리
// m : 0(1월) ~ 11(12월)
// d : 1~31, default=1
// hour, minutes, seconds, ms
console.log(new Date(2022,08,30,10,53));
console.log('-------------------------------------------------');
// Date 객체 메서드
// 메서드를 이용해서 y, m, d 등의 값을 얻기
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMilliseconds()); 
console.log(now.getDay());          //0 = 일요일 ~ 6 = 토요일
console.log('-------------------------------------------------');
// 퀴즈
// Date 객체를 이용해 오늘 요일을 얻고, switch-case문과 if문으로 오늘이 평일/주말 구별해보자
// switch-case문
let today = new Date();
switch(today.getDay()){
    case 0:
    case 6:
        console.log("주말");
        break;
    default:
        console.log("평일");
        break;
}
// if 문
if(today.getDay()===0 || today.getDay()===6){
    console.log("주말");
}else{
    console.log("평일");
}
console.log('-------------------------------------------------');


// ##########################################################################
//                                Math 객체
// ##########################################################################
// 수학적인 상수와 함수를 위한 속성과 메서드
// 속성
console.log(Math.E);        //자연로그 밑
console.log(Math.PI);       //파이
console.log(Math.SQRT2);    //2의 제곱근
// 메서드
console.log(Math.min(100, 200, 30, 7));     //최소
console.log(Math.max(100, 200, 30, 7));     //최대
console.log(Math.round(6.5));               //반올림
console.log(Math.floor(6.5));               //내림
console.log(Math.ceil(6.5));                //올림
console.log(Math.round(Math.max(10.23, 45.3, 1.1)));    //메서드를 메서드로 감싸기
console.log(Math.random()*10);                          //0 <= n < 1의 난수
console.log(Math.floor(Math.random()*10));              //0 ~ 9

console.log(Math.floor(Math.random()*10+1));                //1 ~ 10
console.log(Math.floor(Math.random()*100+1));               //1 ~ 100
console.log(Math.floor(Math.random()*3+20));                //20 ~ 22   // 개수만큼 곱함
// while(true){
//     if(Math.ceil(Math.random()*100)===100){
//         break;
//     }else{
//         console.log("ing");
//     }
// }
// console.log("done");