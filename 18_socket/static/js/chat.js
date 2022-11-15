// [실습 42]
// socket 사용을 위한 객체 생성
let socket = io.connect();
let myNick; // 내 닉네임 설정
let users;

socket.on('connect', () => {
    // console.log('**** Client Socket Connected >> ', socket.id);
})
function setMsg(obj) {
    document.querySelector('#from-server').textContent = `${obj.who} : ${obj.msg}`;
}
function sayHello() {
    socket.emit('hello', { who: 'client', msg: 'hello' });
    socket.on('helloKr', (data) => {
        // console.log(`${data.who} : ${data.msg}`);
        setMsg(data);
    })
}
function sayStudy() {
    socket.emit('study', { who: 'client', msg: 'study' });
    socket.on('studyKr', (data) => {
        // console.log(`${data.who} : ${data.msg}`);
        setMsg(data);
    })
}
function sayBye() {
    socket.emit('bye', { who: 'client', msg: 'bye' });
    socket.on('byeKr', (data) => {
        // console.log(`${data.who} : ${data.msg}`);
        setMsg(data);
    })
}

// [실습 44] 채팅창 입장 안내 문구
// socket.on('notice', (msg) => {
//     // console.log(msg);
//     // document.querySelector('.wrap').insertAdjacentHTML('beforeend',`<div class="notice">${socket.id.slice(0,5)}님이 입장했습니다.</div>`);
//     document.querySelector('.wrap').insertAdjacentHTML('beforeend', `<div class="notice">${msg}</div>`);
//     users = data.users;
//     // console.log(users);
// })
// [실습44] 채팅창 입장 안내 문구
      // notice 이벤트를 받아서 공지 문구를 출력
      socket.on('notice', (msg) => {
        console.log('socket on notice >> ', msg);

        document
          .querySelector('.wrap')
          .insertAdjacentHTML('beforeend', `<div class="notice">${msg}</div>`);
      });
// [실습 44-2] 채팅창 입장 안내 문구 (소켓아이디 -> 닉네임)
function entry() {
    if (document.querySelector('#nickname').value.length > 0) {
        // console.log(document.querySelector('#nickname').value);
        socket.emit('setNick', document.querySelector('#nickname').value);
    }
}
socket.on('entrySuccess', (nick) => {
    myNick = nick;
    // 비활성화
    document.querySelector('#nickname').disabled = true;
    document.querySelector('.nickname-container > button').disabled = true;
    document.querySelector('.wrap').classList.remove('d-none');
    document.querySelector('.input-container').classList.remove('d-none');
})
socket.on('error', (err) => {
    alert(err);
})

// [실습 45] 채팅창 메시지 전송
function send() {
    if (document.querySelector('#message').value.length > 0) {
        socket.emit('send', {
            msg: document.querySelector('#message').value,
            nick: myNick
        });
    }
    document.querySelector('#message').value = ""
}
socket.on('newMessage', (data) => {
    if (data.nick === myNick) {
        document.querySelector('.wrap').insertAdjacentHTML('beforeend', `<div class="chat right"><div class='textbox'>${data.nick} : ${data.msg}</div></div>`);
    } else {
        document.querySelector('.wrap').insertAdjacentHTML('beforeend', `<div class="chat left"><div class='textbox'>${data.nick} : ${data.msg}</div></div>`);
    }
})

function enterkey_entry() {
    if (window.event.keyCode == 13) {
        entry();
    }
}
function enterkey_send() {
    if (window.event.keyCode == 13) {
        send();
    }
}

// [실습 46] DM

// const select =
//     `<select name="messageTo" id="messageTo">
//     <option value='all'>전체</option>
//     <% for(let i=0; i<${users}.length;i++){ %>
//         <% if(${users}[i]!==myNick){ %>
//             <option value=${users}[i]>${users}[i]</option>
//         <% } %>
//     <%  }%>
//     </select>`
//     document.querySelector('select').innerHTML = select;