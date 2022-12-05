import './App.css';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';

function App() {
  return (
    <div className="App">
      <Counter></Counter><hr></hr>
      <SayFunction></SayFunction><hr></hr>
      <CounterFunction value="일 더하기"></CounterFunction><hr></hr>
    </div>
  );
}

export default App;
