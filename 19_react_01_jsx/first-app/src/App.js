import './App.css';
import React from 'react';
import Grass from './grass.png';

function App() {

  const name1 = 'Sean';
  let flag = true;
  let txt = '';

  if(flag){
    txt='True입니다.'
  }else{
    txt='False입니다.'
  }

  const styles = {
    backgroundColor : 'blue',
    fontSize : '40px',
    color: "white",
    h2:{
      color:"red"
    },
    click:{
      cursor:"pointer",
    }
  }

  let name='로이';
  let animal='강아지';
  let a=3;
  let b=2;
  let title='Hello World';

  return (

    // JSX 문법
    // 1. 컴포넌트에 여러 요소 있으면 반드시 부모 요소 하나로 감싸야 함
    <div className="App">
      {/* 2. {} 감싸면 자바스크립트 표현식 사용가능 */}
      {/* 3. styles 속성
          - dom 요소에 스타일 적용시 문자열 x -> "객체" 사용
          - 스타일 이름 중 하이픈(-) 포함시 camelCase 작성해야 함
      */}
      <h2 style={styles}>안녕 {name1}</h2>
      <h2 style={styles.h2}>{name1 === 'Sean' ? '반가워' : '누구...?'}</h2>
      <p>반가워~~~</p>
      <p>{txt}</p>
      <p>{flag ? <h3>true임</h3> : <h3>false임</h3>}</p>
      <p>{flag && <h3>true일때만 보이는 메시지</h3>}</p>
      <h3 className="hello" style={styles.click} onClick={()=>alert('안녕안녕')}>클릭</h3>
      {/* 4. className 사용
          - class 속성이 아닌 className 속성을 사용
      */}
      {/* 5. 종료 태그가 없는 태그의 사용
          - 기존 html 태그에서 종료태그가 없더라도 종료태그를 작성해야 함
          - or self-clossing
          - 잘못된 예) <input>, <br>
          - 올바른 예) <input />, <br />
      */}
      {/* 6. 주석
          - //: jsx 외부 주석
          - jsx 내부 주석
      */}
      <hr></hr>
      <div>이것은 div입니다
        <h3>이것은 div 안에 있는 h3태그 입니다</h3>
      </div>
      <h2>
        제 반려 동물의 이름은 <span>{name}</span>입니다.<br></br>
        <span>{name}</span>은 <span>{animal}</span>입니다.
      </h2>
      <h2>{3+5==8 ? "정답입니다!" : "오답입니다!"}</h2>
      {a>b && <h2>a가 b보다 큽니다</h2>}
      <div className="test">
        <div className='title'>{title}</div>
        <div className='input'>아이디 : <input></input></div>
        <div className='input'>비밀번호 : <input></input></div>
      </div>
      <div className="rainbow">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>
      <div className="ex45">
        <div className="grass"><img src={Grass}></img></div>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
        <div className="four"></div>
        <div className="five"></div>
        <div className="six"></div>
        <div className="seven"></div>
      </div>
    </div>
  );
}

export default App;


// 단축 회로 평가

// AND
// 앞의 값이 false 라면, 뒤 값이 상관없이 바로 false 귀결
// console.log(true && true)
// console.log(false && true)

// OR
// 앞의 값이 true라면, 두 값 상관없이 바로 true 귀결
// console.log(true || true)
// console.log(true || false)