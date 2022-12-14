const tbody = document.querySelector('tbody');
const buttonGroup = document.querySelector('#button-group');

function createVisitor() {
    // console.log('click 등록 버튼');
    // 폼 선택
    const form = document.forms['visitor-form'];
    // console.dir(form);
    // console.log(form.name.value); // name input 값의 value
    // console.log(form.comment.value); // comment input 값의 value
    if (form.name.value.length > 10) {
        alert("작성자는 10자 이하로");
        clearInput();
        return;
    }
    if (!form.name.value.length || !form.comment.value.length) {
        alert("입력하세요");
        return;
    }

    axios({
        method: 'POST',
        url: '/visitor/write',
        data: {
            name: form.name.value,
            comment: form.comment.value,
        },
    })
        .then((res) => {
            // console.log(res);
            // console.log(res.data);
            return res.data;
        })
        .then((data) => {
            // console.log(data); 
            const html = `
        <tr id="tr_${data.id}">
            <td>${data.id}</td>
            <td>${data.name}</td>
            <td>${data.comment}</td>
            <td><button type="button" onclick="editVisitor('${data.id}');">수정</button></td>
            <td><button type="button" onclick="deleteVisitor(this, '${data.id}');">삭제</button></td>
        </tr>`;

            // 테이블에 추가된 정보를 "바로" 보여주기
            // data 객체에 담긴 값을 이용해서 tbody 태그의 자식으로 tr 한줄이 추가되는 코드
            // js: insertAdjacentHTML() -> 특정 요소에 html 코드 추가 가능
            // vs. innerHTML(): 기존 html 코드 지우고 덮어씌움
            // jquery: append()
            tbody.insertAdjacentHTML('beforeend', html); // ver.js
            // $('tbody').append(html); // ver. jquery
        });
    clearInput();
}

function deleteVisitor(obj, id) {
    // console.log('click 삭제 버튼');
    // console.log(obj);
    // console.log(id);
    if (!confirm("삭제하시겠습니까?")) {
        return;
    }
    axios({
        method: 'DELETE',
        url: '/visitor/delete',
        data: {
            id: id,
        },
    }).then((res) => {
        // console.log(res.data);
        return res.data;
    }).then((data) => {
        alert(data);
        // obj
        // obj.parentElement.parentElement.remove();
        // closest() 메서드
        obj.closest(`#tr_${id}`).remove();
    })
    clearInput();
}

// 테이블에서 [수정] 버튼 클릭 시
// - (1) form input에 이름, 방명록 값 넣기
// - (2) [변경], [취소] 버튼 대체
async function editVisitor(id) {
    // console.log(id);
    // (2) [변경], [취소] 버튼 대체
    const html = `
    <button type="button" onclick="editDo(${id})">변경</button>
    <button type="button" onclick="editCancel()">취소</button>`;
    buttonGroup.innerHTML = html;

    // (1) form input에 이름, 방명록 값 넣기
    // axios의 응답 결과를 result 변수에 담고자 함
    // axios 처리를 기다렸다가 result 변수에 담아야 함
    // -> async / await
    // await를 만나 promise가 처리될 때까지 기다려줌
    let result =
        await axios({
            method: 'GET',
            url: `/visitor/get?id=${id}`,
        }).then((res) => {
            // console.log(res.data);
            return res.data;
        })
    // console.log('방문자 하나 조회 결과 : ',result);
    const form = document.forms['visitor-form'];
    form.name.value = result.name;
    form.comment.value = result.comment;

}

// [변경] 버튼 클릭
// - 데이터 변경
function editDo(id) {
    const form = document.forms['visitor-form'];
    axios({
        method: 'PATCH',
        url: '/visitor/edit',
        data: {
            id: id,
            name: form.name.value,
            comment: form.comment.value,
        }
    }).then((res) => {
        // console.log(res.data);
        return res.data;
    }).then((data) => {
        alert(data);    // '수정 성공'!!!
        const children = document.querySelector(`#tr_${id}`).children;  // 배열 크기 5 (tr 5개)
        children[1].textContent = form.name.value;
        children[2].textContent = form.comment.value;

        const html = `<button type="button" onclick="createVisitor()">등록</button>`;
        buttonGroup.innerHTML = html;
        clearInput();
    })
}

function editCancel() {
    const html = `<button type="button" onclick="createVisitor()">등록</button>`;
    buttonGroup.innerHTML = html;
    clearInput();
}

function clearInput() {
    const form = document.forms['visitor-form'];
    form.name.value = '';
    form.comment.value = '';
}
