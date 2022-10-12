console.log("연결")

// jquery 요소 선택하기
console.log($('div'));
// 변수에 담을 수도 있다
let myDiv = $('div');
console.log(myDiv);

function submitjs(){
    document.querySelector('.div1').innerHTML='반갑습니다';
    document.querySelector('.div1').setAttribute('style','border: 2px solid red');
}

function submitjquery(){
    $('.div1').text('반갑습니다');
    $('.div1').css('border','3px dotted blue');
}