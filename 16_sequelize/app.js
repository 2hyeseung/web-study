const express = require('express');
const app = express();
const PORT = 8002;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use('/static', express.static(__dirname + '/static'));  // 정적 파일 보관할 폴더
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// MVC 패턴 적용
const indexRouter = require('./routes');  // ./routes/index : index는 생략 가능 (default)
app.use('/',indexRouter);   // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// [404 Error]
// 맨 마지막 라우트로 선언
// 그렇지 않으면 나머지 코드 무시됨
app.get('*',(req,res)=>{
    return res.render('404');
})

app.listen(PORT, () => {
  console.log(`Port number is ${PORT}`);
});