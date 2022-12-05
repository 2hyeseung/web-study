import { useState, useRef } from "react";

const Ex54 = () => {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const writerRef = useRef();
    const titleRef = useRef();
    const [comments, setComments] = useState([
        { writer: "민수", title: "안뇽" },
        { writer: "지민", title: "하이하이" },
        { writer: "희수", title: "멋쟁이" },
    ]);

    const addComment = () => {
        let newComment = { writer: inputWriter, title: inputTitle };
        setComments([...comments, newComment]);
        setInputWriter("");
        setInputTitle("");
    };

    const inputCheck = () => {
        inputWriter.trim() && inputTitle.trim()
            ? addComment()
            : inputWriter.trim()
            ? titleRef.current.focus()
            : writerRef.current.focus();
    };

    return (
        <>
            <h1>실습 54</h1>
            <form>
                <label htmlFor="writer">작성자: </label>
                <input
                    type="text"
                    id="writer"
                    value={inputWriter}
                    ref={writerRef}
                    onChange={(e) => setInputWriter(e.target.value)}
                />
                <label htmlFor="title">제목: </label>
                <input
                    type="text"
                    id="title"
                    value={inputTitle}
                    ref={titleRef}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <button type="button" onClick={inputCheck}>
                    작성
                </button>
            </form>

            <table border={1} style={{ margin: "30px auto", width: "500px" }}>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map((c, idx) => {
                        return (
                            <tr key={idx + 1}>
                                <td>{idx + 1}</td>
                                <td>{c.title}</td>
                                <td>{c.writer}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default Ex54;
