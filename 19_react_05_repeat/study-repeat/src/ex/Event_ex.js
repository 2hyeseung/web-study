import { useState } from "react";

const Event_ex = () => {
    const [ex51, setEx51] = useState([
        { name: "윤소희", email: "yoonsohee@gmail.com" },
    ]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [nextId, setNextId] = useState(2);
    const addInfo = () => {
        const newEx51 = ex51.concat({
            name: name,
            email: email,
        });
        setNextId(nextId + 1);
        setEx51(newEx51);
        setName("");
        setEmail("");
    };
    const deleteInfo = (name) => {
        const newEx51 = ex51.filter((a) => a.name !== name);
        setEx51(newEx51);
    };
    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            addInfo();
        }
    };
    return (
        <div>
            <hr></hr>
            <h1>실습51</h1>
            <input
                type="text"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                type="text"
                value={email}
                placeholder="email"
                onKeyPress={onKeyPress}
                onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button onClick={addInfo} onKeyPress={onKeyPress}>
                등록
            </button>
            <ul>
                {ex51.map((a) => {
                    return (
                        <li key={a.id} onDoubleClick={() => deleteInfo(a.name)}>
                            {a.name} : {a.email}
                        </li>
                    );
                })}
            </ul>
            <hr></hr>
            <h1>실습52</h1>
            작성자 : <input></input>
            <br></br>
            제목 : <input></input>
            <br></br>
            <button>작성</button>
            <ul></ul>
        </div>
    );
};

export default Event_ex;
