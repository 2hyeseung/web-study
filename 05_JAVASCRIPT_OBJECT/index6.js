console.log('!');

// 이벤트 객체
// event
// 이벤트 발생; 브라우저는 발생한 이벤트에 대한 정보를 담은
// 이벤트 객체(event object)를 이벤트 리스너에게 전달
const clickMe = document.querySelector('#clickme');
clickMe.addEventListener('click',function(e){
    console.log(e);
    // e : 이벤트 객체에 대한 정보를 담고 있음
});



// ============================================================================================

const todoForm = document.querySelector('#todo-form');
const ul = document.querySelector('.todos');

todoForm.addEventListener('submit',function(e){
    // preventDefault : 브라우저에서 구현된 기본 동작취소
    // 폼 이벤트 : 폼이 제출되면 새로고침되는 기본동작을 취소
    e.preventDefault();

    // form의 submit 이벤트는 제출되는 것이 기본 동작
    // 제출 : 새로고침
    // console.log('Add 버튼 클릭');

    const todoInput=document.querySelector('input[name="todo"]');
    console.log(todoInput);         // 요소 출력
    console.dir(todoInput);         // console.dir() : 객체를 트리구조로 보여주는 명령어
    console.log(todoInput.value);   // 입력값 
    let todo = todoInput.value;     // 사용자가 input에 입력한 값

    // li 태그를 만들어서, li 태그의 content로 input.value 값이 담기도록
    const newTodo = document.createElement('li');   //<li></li>
    newTodo.innerText=todo;                         //<li>입력값</li>
    ul.append(newTodo);

    // input창 초기화
    todoInput.value="";   // input의 content를 빈 문자열로 초기화
});

// ============================================================================================

const buylistForm = document.querySelector('#buylist-form');
const ul2 = document.querySelector('.buylist');

buylistForm.addEventListener('submit',function(e){
    e.preventDefault();     //새로고침취소
    const buyInput=document.querySelector('input[name="buylist"]');     //입력값
    const newBuyList = document.createElement('li');                    // 빈 <li></li>
    newBuyList.innerText=document.querySelector('input[name="buylist"]').value; // <li>value값</li>
    ul2.append(newBuyList); // ul에 값 추가
    buyInput.value="";    // input을 빈값으로
});

// ============================================================================================

const chgInput = document.querySelector('input[id="change-input"]');
// console.log(chgInput);

chgInput.addEventListener('input',function(){
    // input : 입력창에 변경이 일어나는 순간을 계속 감지
    // console.log('change!!!');
    const div = document.querySelector('.intro');
    div.textContent= chgInput.value;
})

// ============================================================================================

const chgInput2 = document.querySelector('textarea[id="textareaInput"]')
chgInput2.addEventListener('input',function(){
    const div2 = document.querySelector('.intro2');
    div2.textContent = chgInput2.value;
})




// ============================================================================================

// 키보드 이벤트

const keyInput = document.querySelector('#key-input');
keyInput.addEventListener('keydown',function(e){
    // keydown : 키를 누르고 있을 때
    // console.log(e);
    // console.log(e.code);
    if(e.code==='ArrowUp'){
        console.log('위');
    }else if(e.code === 'ArrowDown'){
        console.log('아래');
    }else if(e.code === 'ArrowLeft'){
        console.log('왼쪽');
    }else if(e.code === 'ArrowRight'){
        console.log('오른쪽');
    }else{
        console.log('others');
    }

    
})