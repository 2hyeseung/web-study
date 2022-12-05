import { useState } from "react";

const Alphabet = () => {
    // 배열(state)에 고유 id 갖도록 설정
    const [alphabets, setAlphabets] = useState([
        { id: 1, alpha: "k" },
        { id: 2, alpha: "d" },
        { id: 3, alpha: "t" },
        { id: 4, alpha: "3" },
        { id: 5, alpha: "r" },
        { id: 6, alpha: "d" },
    ]);
    const [inputAlpha, setInputAlpha] = useState("init");
    // 새로운 항목 추가를 위한 id 값
    const [nextId, setNextId] = useState(7);
    const addAlpha = () => {
        // 기존의 alphabets state에 새로 입력된 값 추가
        const newAlpha = alphabets.concat({
            id: nextId,
            alpha: inputAlpha,
        });
        setNextId(nextId + 1); // 다음 항목 id를 위해 1 증가
        setAlphabets(newAlpha);
        setInputAlpha(""); // input 초기화
    };
    const deleteAlpha = (id) => {
        const newAlpha = alphabets.filter((a) => a.id !== id);
        setAlphabets(newAlpha);
    };
    return (
        <div>
            <h1>Alphabet</h1>
            <input
                type="text"
                value={inputAlpha}
                onChange={(e) => setInputAlpha(e.target.value)}
            ></input>
            <button onClick={addAlpha}>ADD</button>
            <ul>
                {alphabets.map((a) => {
                    // a => {id : n, alpha : "x"}
                    return (
                        <li key={a.id} onDoubleClick={() => deleteAlpha(a.id)}>
                            {a.alpha}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Alphabet;
