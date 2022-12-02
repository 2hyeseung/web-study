import { useState } from "react";

const SyntheticEvent = () => {
  const [text, setText] = useState("초기값");
  // const setInputValue = (e) => console.log(e);
  const setInputValue = (e) => setText(e.target.value);
  const showAlert = (e) => {
    alert(`input 입력값은 ${text}!!!!`);
    setText("");
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      showAlert();
    }
  };
  return (
    <div>
      <button onClick={(e) => console.log(e)}>SyntheticEvent 확인</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="입력하세요"
        onKeyPress={onKeyPress}
        onChange={setInputValue}
        value={text}
      ></input>
      <button onClick={showAlert}>입력</button>
    </div>
  );
};

export default SyntheticEvent;
