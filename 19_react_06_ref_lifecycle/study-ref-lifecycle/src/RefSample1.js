import { useRef } from "react";

const RefSmaple1 = () => {
    // 1. ref 객체 만들기
    const inputRef = useRef();

    const handleFocus = () => {
        // 3. ref 객체의 current 속성의 실제 요소를 가르킴
        console.log(inputRef.current); // <input type="text" placeholder="Enter something" />
        inputRef.current.focus();
    };

    const handleDisabled = () => {
        inputRef.current.disabled = true;
    };

    return (
        <>
            <p>함수형 컴포넌트에서 버튼 클릭시 input focus 기능 구현</p>
            {/* 2. 선택하고 싶은 HTML element에 ref prop 걸어주기 */}
            <input ref={inputRef} type="text" placeholder="Enter something" />
            <button onClick={handleFocus}>FOCUS</button>
            <button onClick={handleDisabled}>DISABLED</button>
        </>
    );
};

export default RefSmaple1;
