const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// app.get('/', (req, res) => {
//   res.render('index', { title: '동적 폼 실습' });
// });

// app.post('/practice30', (req, res) => {
//   console.log(req.body);

//   if (realId === req.body.userId && realPw === req.body.userPw) {
//     res.send({ userInfo: req.body, isSuccess: true });
//   } else {
//     res.send({ isSuccess: false });
//   }
// });

// app.listen(PORT, function () {
//   console.log(`http://localhost:${PORT}`);
// });


// MVC 패턴 적용
const indexRouter = require('./routes');  // ./routes/index : index는 생략 가능 (default)
app.use('/',indexRouter);   // localhost:PORT/ 경로를 기본으로 ./routes/index.js 파일에 선언한 대로 동작

// [404 Error]
// 맨 마지막 라우트로 선언
// 그렇지 않으면 나머지 코드 무시됨
// app.get('*',(req,res)=>{
//     return res.render('404');
// })

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});