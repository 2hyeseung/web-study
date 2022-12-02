import { useState } from 'react';

const NumberTest = () => {
    const [number, setNumber] = useState(0);
    const onIncrease = () => {
        setNumber(number+1);
    }
    const alertMsg = (msg) => {
        alert(msg);
    }
    const alertMsg2 = (evt, msg) => {
        console.log(evt.target);
        alert(msg);
    }

    return (
        <div>
            <h1>Counter</h1>
            <h2>{number}</h2>
            <button onClick={onIncrease}>더하기</button>
            <hr></hr>
            <h1>Alert</h1>
            <button onClick={()=>alertMsg('hellooooo')}>메시지 띄우기</button>
            <button onClick={(e)=>alertMsg2(e,'bye~~~~~~~~~~~~')}>콘솔 & 메시지 띄우기</button>
        </div>
    )
}

export default NumberTest;