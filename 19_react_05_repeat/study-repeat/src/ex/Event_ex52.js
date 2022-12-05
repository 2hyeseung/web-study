import { useState } from "react";

const Event_ex52 = () => {
    const [ex52, setEx52] = useState([]);
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [nextId, setNextId] = useState(1);

    // 풀이
    const [comments, setComments] = useState([
        { writer: "민수", title: "안뇽" },
        { writer: "지민", title: "하이하이" },
        { writer: "희주", title: "멋쟁이" },
    ]);
    // let newComment = {writer: inputWriter, title:inputTitle}
    // setComments([...comments, newComment])
    // ...comments : 기존 state 배열의 모든 원소
    // newComment : 새로 추가될 state 배열의 원소

    const addInfo = () => {
        const newEx52 = ex52.concat({
            name: name,
            id: nextId,
            title: title,
        });
        setNextId(nextId + 1);
        setEx52(newEx52);
        setName("");
        setTitle("");
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            addInfo();
        }
    };
    return (
        <div>
            <hr></hr>
            <h1>실습52</h1>
            작성자 :
            <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            ></input>
            <br></br>
            제목 :
            <input
                type="text"
                value={title}
                placeholder="title"
                onKeyPress={onKeyPress}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <br></br>
            <button onClick={addInfo}>등록</button>
            <ul>
                {ex52.map((a) => {
                    return (
                        <li key={a.id}>
                            번호 : {a.id}, 작성자 : {a.name}, 제목 :{a.title}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Event_ex52;
