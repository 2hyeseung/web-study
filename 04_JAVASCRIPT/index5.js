console.log('connected!');

// 반복문
// - for문
// - while문

// for문
// for(초기값; 조건식; 증감값){
//     //반복할 코드
// }


for(let i=0;i<=4;i++){
    console.log(i);
}
console.log('-------------------');
for(let i=0;i<=4;i++){
    console.log(i+1);
}
console.log('-------------------');
for(let i=1;i<=5;i++){
    console.log(i);
}
console.log('-------------------');
for(let i=1;i<6;i++){
    console.log(i);
}
console.log('-------------------');
for(let i=5;i>0;i--){
    console.log(6-i);
}
console.log('-------------------');
for(let i=5;i>0;i--){
    console.log(i);
}
console.log('-------------------');
for(let i=5;i>=1;i--){
    console.log(i);
}
console.log('-------------------');
for(let i=1;i<=10;i++){
    if(i%2===0){
        console.log(i);
    }
}
console.log('-------------------');
for(let i=2;i<=10;i=i+2){
    console.log(i);
}
console.log('-------------------');
let sum=0;
for(let i=1;i<=10;i++){
    sum+=i;
}
console.log(`1 ~ 10까지 모두 더한 값 : ${sum}`);
let sum2=0;
for(let i=2;i<=10;i=i+2){
    sum2+=i;
}
console.log(`1 ~ 10까지 짝수를 모두 더한 값 : ${sum2}`);
let sum3=0;
for(let i=1;i<=10;i=i+2){
    sum3+=i;
}
console.log(`1 ~ 10까지 홀수를 모두 더한 값 : ${sum3}`);
console.log('-------------------');



// while문
// while(조건식){
//     //반복할 코드
// }
// 조건식을 만족하면 블럭 내부 코드 실행
// 내부 코드 실행 완료 -> 조건식으로 돌아가서 다시 반복 여부 결정
//  - if문 : 조건식 true; 블럭 내부 코드 1번 실행
//  - while문 : 조건식 true; 블럭 내부 코드 "계속" 반복
//              -> 조건식 false; 블럭을 빠져나옴 (= 반복 종료)

var n=1;
while(n<=5){
    console.log(n);
    n++;
}
console.log('-------------------');
var n=9;
while(n>=4){
    console.log(n);
    n--;
}
console.log('-------방법1-------');
var even=2;
while(even<=10){
    console.log(even);
    even+=2;
}
console.log('-------------------');
var odd=9;
while(odd>=1){
    console.log(odd);
    odd-=2;
}
console.log('-------방법2-------');
var even=1;
while(even<=10){
    if(even%2===0){
        console.log(even); 
    }
    even+=1;
}
console.log('-------------------');
var odd=9;
while(odd>=1){
    if(odd%2!==0){
        console.log(odd);  
    }
    odd-=1;
}


// 무한 루프
// : 반복문에서 조건식의 결과가 항상 참이되어 반복문을 탈출하지 못하는 상태
// 의도적으로 무한루프를 만들어서 특정 조건이 만족될 때까지 반복하여서 코드를 작성하기도 함

// while(true){
//     ...
//     // 탈출 조건 만들기
// }

// 조건문 등을 이용해 탈출 조건을 만들어 주고
// break 키워드 -> 블록을 빠져나옴

// let go = confirm("계속 진행할까요?");
// console.log(go);

var count=0;
while(true){
    if (confirm("계속 진행하시겠습니까?")===true){
        alert(`${count}번째 반복입니다!`);
        count+=1;
    }else{
        break;
    }
}
console.log("무한 루프 탈출 성공!");