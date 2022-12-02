import { useState } from "react";
import "./Handler_ex.css";

const Handler_ex = () => {
    const [text, setText] = useState("Hello World!");
    const [colorText, setColorText] = useState("검정색 글씨");
    const [colorTextStyle, setColorTextStyle] = useState({ color: "black" });
    const [style, setStyle] = useState({ display: "block" });
    const [styleOpposite, setStyleOpposite] = useState({ display: "none" });
    const [visible, setVisible] = useState(true);

    const GoodBye = () => {
        setText("Goodbye World!");
    };
    const Red = () => {
        setColorText("빨간색 글씨");
        setColorTextStyle({ color: "red" });
    };
    const Blue = () => {
        setColorText("파란색 글씨");
        setColorTextStyle({ color: "blue" });
    };
    const Appear = () => {
        setStyle({ display: "block" });
        setStyleOpposite({ display: "none" });
    };
    const Disappear = () => {
        setStyle({ display: "none" });
        setStyleOpposite({ display: "block" });
    };
    const Visible = () => {
        {
            visible ? setVisible(false) : setVisible(true);
        }
    };

    return (
        <div>
            <h1>실습 48</h1>
            <h2>{text}</h2>
            <button onClick={GoodBye}>클릭</button>
            <hr></hr>
            <h1>실습 49</h1>
            <h2 className="ColorText" style={colorTextStyle}>
                {colorText}
            </h2>
            <button onClick={Red}>빨간색</button>
            <button onClick={Blue}>파란색</button>
            <hr></hr>
            <h1>실습 50</h1>
            <div className="Btns">
                <button onClick={Disappear} className="ex50-btn" style={style}>
                    사라져라
                </button>
                <button
                    onClick={Appear}
                    className="ex50-btn"
                    style={styleOpposite}
                >
                    보여라
                </button>
            </div>
            <h2 className="ex50" style={style}>
                안녕하세요
            </h2>
            <hr></hr>
            <h1>실습 50</h1>
            <div>{visible && "안녕하세요"}</div>
            <button onClick={Visible}>{visible ? "사라져라" : "보여라"}</button>
        </div>
    );
};

export default Handler_ex;
