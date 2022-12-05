// 클래스형 컴포넌트에서 state 다루기
import React from 'react';

class Counter extends React.Component {
    // 기존 버전
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         number : 0,
    //     }
    // }

    // 현재 버전
    state = {
        number : 0,
        num : 0
    }

    render(){

        // state 데이터는 this.state로 접근 가능
        const {number, num} = this.state;    // { number : 0 }
        return(
            <div>
                <h1>{number}</h1>
                <button onClick={()=>alert(number)}>alert</button>
                {/* setState를 이용하면 state 값 변경 가능 */}
                <button onClick={()=>this.setState({number : 7})}>set</button>
                <button onClick={()=>this.setState({number : number+1})}>+1</button>
                <button onClick={()=>this.setState({number : number-1})}>-1</button>
                <hr></hr>
                <h1>실습 1번 {num}</h1>
                <button onClick={()=>this.setState({num : num+2})}>+2</button>
                <button onClick={()=>this.setState({num : num-1})}>-1</button>
            </div>
        )
    }
}

export default Counter;