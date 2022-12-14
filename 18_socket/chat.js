const express = require('express');
const app = express();
// socket은 express가 아닌 http 모듈에 연결해야 사용 가능
const http = require('http').Server(app);
const io = require('socket.io')(http);  // http-socket 연결
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    res.render('chat');
});

// 유저 목록
const nickArray = {};

// [실습46] DM 기능 구현
// 유저 목록 업데이트
function updateList() {
    io.emit('updateNicks', nickArray);
}


// io.on
// : socket과 관련된 통신작업을 처리
io.on('connection', (socket) => {
    // "connection" event
    // : 클라이언트가 접속했을 때 발생, 콜백으로 socket 객체를 제공 
    // socket.id : 소켓 고유 아이디 -> socket은 ** 웹 페이지 별**로 생김 !!
    // console.log('**** Server Socket Connected >> ',socket.id);

    // [실습 42]
    socket.on('hello', (data) => {
        // console.log('socket on hello >> ',data);
        // console.log(`${data.who} : ${data.msg}`);
        socket.emit('helloKr', { who: 'hello', msg: '안녕~!' });
    })
    socket.on('study', (data) => {
        // console.log('socket on study >> ',data);
        // console.log(`${data.who} : ${data.msg}`);
        socket.emit('studyKr', { who: 'study', msg: '공부...' });
    })
    socket.on('bye', (data) => {
        // console.log('socket on bye >> ',data);
        // console.log(`${data.who} : ${data.msg}`);
        socket.emit('byeKr', { who: 'bye', msg: '바이!' });
    })

    // [실습 44] 채팅창 입장 안내 문구
    // io.emit('notice',`${socket.id}님이 입장하셨습니다.`);
    // [실습 44-2] 채팅창 입장 안내 문구 (소켓아이디 -> 닉네임)
    socket.on('setNick', (nick) => {
        // console.log('socket on setNick >> ',nick);
        // console.log(nick);
        if (Object.values(nickArray).indexOf(nick) > -1) {   // 닉네임 중복이 있다면
            socket.emit('error', '닉네임 중복');
        } else{ 
            nickArray[socket.id] = nick;
            // console.log('접속 유저 목록 >> ',nickArray);
            socket.emit('entrySuccess', nick);
            io.emit('notice', `${nick}님이 입장하셨습니다.`);
            updateList();
        }
    })
    // [실습 44-3] 퇴장
    socket.on('disconnect', (disconnect) => {
        if (nickArray[socket.id] !== undefined) {
            // console.log(disconnect);
            io.emit('notice', `${nickArray[socket.id]}님이 퇴장하셨습니다.`);
            delete nickArray[socket.id];
            // console.log(nickArray[socket.id]);
            updateList();   // 유저 목록 업데이트
        }
    })

    // [실습 45] 채팅창 메시지 전송
    socket.on('send', (data) => {
        let now = new Date();
        date = now.getMonth()+"월"+now.getDate()+"일 "+now.getHours()+":"+now.getMinutes()
        if(data.dm!=='all'){    // dm
            const sendData = { nick:data.nick, msg:data.msg, dm:'(속닥속닥) ',date:date};
            io.to(data.dm).emit('newMessage', sendData);
            socket.emit('newMessage',sendData);
        }else{                  // 전체
            const sendData = { nick:data.nick, msg:data.msg, date:date};
            io.emit('newMessage', sendData);
        }
    })



})


// 주의!!! 소켓을 사용하기 위해서는 http.listen()으로 포트를 열어야 함
http.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
