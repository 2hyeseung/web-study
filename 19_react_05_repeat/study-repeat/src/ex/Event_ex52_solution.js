import { useState } from "react";

const Prob52 = () => {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    // comment list state
    const [comments, setComments] = useState([
        { writer: "민수", title: "안뇽" },
        { writer: "지민", title: "하이하이" },
        { writer: "희수", title: "멋쟁이" },
        // + newComment
    ]);

    const addComment = () => {
        // 1. comments state에 추가할 원소 만들기
        // { writer: xxx, title: xxx }
        let newComment = { writer: inputWriter, title: inputTitle };
        console.log(newComment);

        // 2. 원소를 comments state에 추가하기 = state 변경
        // ...comments: 기존 state 배열의 모든 원소
        // newComment: 새로 추가될 state 배열의 원소
        // [...comments, newComment]: 변경된 state 배열
        setComments([...comments, newComment]);

        // 3. input 초기화
        setInputWriter("");
        setInputTitle("");
    };

    return (
        <>
            <form>
                <label htmlFor="writer">작성자: </label>
                <input
                    type="text"
                    id="writer"
                    value={inputWriter}
                    onChange={(e) => setInputWriter(e.target.value)}
                />
                <label htmlFor="title">제목: </label>
                <input
                    type="text"
                    id="title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                />
                <button type="button" onClick={addComment}>
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
                        // c = { writer: xxx, title: xxx }
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

export default Prob52;
