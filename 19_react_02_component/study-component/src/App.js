
import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';
import PropsExercise from './PropsExercise';
import PropsExerciseClass from './PropsExerciseClass';

function App() {
  return (
    <div className="App">
      <ClassComponent name="KDT3rd" students={100}/>
      <hr/>
      <FuncComponent name="KDT3기" students={25}/>
      <hr/>
      <Button></Button>
      <Button Link="https://www.google.com">구글</Button>
      <Button Link="https://www.daum.net">다음</Button>
      <PropsExercise food="파스타" title="나의 하루는 4시 40분에 시작된다" author="김유진" price="13,500원" type="자기계발서">
      </PropsExercise>
      <PropsExerciseClass text="App 컴포넌트에서 넘겨준 text props입니다." valid={valid}></PropsExerciseClass>
    </div>
  );
}

function valid(){
    console.log('콘솔 띄우기 성공!');
}

export default App;
