const express = require('express');
const cookieParser = require("cookie-parser");
// cookie-parser
// 요청의 쿠키를 해석해서 req.cookies 객체로 만듦
// ex. name-hello라는 쿠키를 보내면, req.cookies -> {name:'hello'}
// 유효기간이 지난 쿠키는 알아서 제거
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.use('/views', express.static(__dirname+'/views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());    // req.cookies 가능해짐

// res.cookie(키,값,옵션)
// : 쿠키를 "설정"

// res.clearCookie(키,값,옵션)
// : 쿠키를 "삭제"

const cookieConfig = {
    // 옵션 속성들
    httpOnly: true,     // 서버를 통해서만 쿠키 접근 가능 (js,프론트단에서 접근 불가능)
    maxAge : 60 * 1000, // 유효 시간 (단위 : 밀리초) (1000곱햇으니 앞에 숫자가 초)
    // expires : 만료 날짜 설정
    // secure : https에서만 쿠키 접근
    // signed : 쿠키 암호화
}

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/setCookie',(req,res)=>{
    res.cookie('myKey1','myValue1',cookieConfig);   // 쿠키 설정
    res.send('set cookie');                         // 응답 보냄
})
app.get('/getCookie', (req,res)=>{
    res.send(req.cookies);                          // 쿠키해석 (읽기)
  });
app.get('/clearCookie',(req,res)=>{
    res.clearCookie('myKey1','myvalue1',cookieConfig);  // 쿠키 삭제
    res.send('clear cookie!!');                         // 응답을 보냄
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})