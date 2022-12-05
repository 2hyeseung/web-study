import {useState} from 'react';

const CounterFunction = (props) => {
    const [number, setNumber] = useState(0);
    const [num, setNum] = useState(0);

    const plusOne = () => setNumber(number+1);
    const Increase = () => setNum(num+1);
    const Decrease = () => setNum(num-2);

    // console.log(props)
    const {value} = props;

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={plusOne}>{value}</button>
            <hr></hr>
            <h1>실습 2번 {num}</h1>
            <button onClick={Increase}>Increase</button>
            <button onClick={Decrease}>Decrease</button>
        </div>
    )
}

export default CounterFunction;