console.log('connected');

let no_1=1;
let no_2=2;
let no_3=3;

console.log(`no_1 = ${no_1} \nno_2 = ${no_2} \nno_3 = ${no_3}`);


function add(no_1,no_2,no_3){
    let res=no_1+no_2+no_3;
    console.log(`no_1+no_2+no_3 = ${res}`);
    alert(res);
}

function sub(no_1,no_2){

    let res2=Math.abs(no_1-no_2)
    console.log(`no_1과 no_2의 차 = ${res2}`);
    alert(res2);
}

function divide(no_1,no_2){
    let res3=no_1/no_2;
    console.log(`no_1/no_2 = ${res3}`);
    alert(res3);
}

function mul(no_1,no_2){
    let res4=no_1*no_2;
    console.log(`no_1*no_2 = ${res4}`);
    alert(res4);
}



add(no_1,no_2,no_3);
sub(no_1,no_2);
divide(no_1,no_2);
mul(no_1,no_2);