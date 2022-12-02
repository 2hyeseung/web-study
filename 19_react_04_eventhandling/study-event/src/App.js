import "./App.css";
import SyntheticEvent from "./SyntheticEvent";
import NumberTest from "./NumberTest";
import ClassBind from "./ClassBind";
import Handler_ex from "./ex/Handler_ex";

function App() {
  return (
    <div className="App">
      <SyntheticEvent></SyntheticEvent>
      <hr />
      <NumberTest></NumberTest>
      <hr />
      <ClassBind></ClassBind>
      <hr />
      <Handler_ex></Handler_ex>
    </div>
  );
}

export default App;
