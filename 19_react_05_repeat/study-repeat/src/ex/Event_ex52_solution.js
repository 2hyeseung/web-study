import { useState } from "react";

const Prob52 = () => {
    const [inputWriter, setInputWriter] = useState("");
    const [inputTitle, setInputTitle] = useState("");
    const [inputSearch, setInputSearch] = useState("");
    const [selectSearch, setSelectSearch] = useState("title");
    const [searchComments, setSearchComments] = useState([]);
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

    const search = () => {
        let result = [];
        {
            inputSearch.trim().length >= 1 &&
                (selectSearch === "writer"
                    ? (result = comments.filter((comment) =>
                          comment.writer.includes(inputSearch)
                      ))
                    : (result = comments.filter((comment) =>
                          comment.title.includes(inputSearch)
                      )));
        }
        setSearchComments(result);
        setInputSearch("");
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

            <form name="search-form">
                <label htmlFor="search">검색</label>
                <select
                    name="search"
                    id="search"
                    onChange={(e) => setSelectSearch(e.target.value)}
                >
                    <option value="title">제목</option>
                    <option value="writer">작성자</option>
                </select>
                <input
                    type="text"
                    id="inputSearch"
                    value={inputSearch}
                    placeholder="검색"
                    onChange={(e) => setInputSearch(e.target.value)}
                />
                <button type="button" onClick={search}>
                    검색
                </button>
            </form>
            <div>전체 댓글</div>
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

            <div>댓글 검색 결과</div>
            {searchComments.length !== 0 ? (
                <table
                    border={1}
                    style={{ margin: "30px auto", width: "500px" }}
                >
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                        </tr>
                    </thead>
                    <tbody>
                        {searchComments.map((c, idx) => {
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
            ) : (
                <div>
                    <br></br>검색 결과가 없습니다.
                </div>
            )}
        </>
    );
};

export default Prob52;
