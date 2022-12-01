
import './App.css';
import ClassComponent from './ClassComponent';
import FuncComponent from './FuncComponent';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <ClassComponent/>
      <ClassComponent name="KDT3rd" students={100}/>
      <hr/>
      <FuncComponent/>
      <FuncComponent name="KDT3기" students={25}/>
      <hr/>
      <Button></Button>
      <Button Link="https://www.google.com">구글</Button>
      <Button Link="https://www.daum.net">다음</Button>
    </div>
  );
}

export default App;
