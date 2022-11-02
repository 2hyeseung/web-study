const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routing (경로 설정)
app.get('/', function (req, res) {
  res.render('dynamic', { title: '동적 폼을 배워보자!!' });
});
app.get('/exercise29',function(req,res){
    res.render('exercise29',{});
})


// 1. ajax
// GET /ajax
app.get('/ajax',function(req,res){
    console.log(req.query);
    res.send(req.query);
})
// POST /ajax
app.post('/ajax',function(req,res){
    console.log(req.body);
    res.send(req.body);
})

// 2. axios
// GET /axios
app.get('/axios',function(req,res){
    console.log(req.query);
    res.send(req.query);
})
// POST /axios
app.post('/axios',function(req,res){
    console.log(req.body);
    res.send(req.body);
})

// 3. fetch
// GET /fetch
app.get('/fetch',function(req,res){
    console.log(req.query);
    res.send(req.query);
})
// POST /fetch
app.post('/fetch',function(req,res){
    console.log(req.body);
    res.send(req.body);
})

// 실습 29, 30
// GET /axios
app.get('/axios29',function(req,res){
    res.send(req.query);
})
// POST /axios
app.post('/axios30',function(req,res){  
    // 아이디 abc, 비번 123
    if(req.body.id!='abc'){
        req.body.res='id-wrong'
    }else if(req.body.pw!='123'){
        req.body.res='pw-wrong'
    }else{
        req.body.res='success'
    }
    res.send(req.body);
})

// res.send({userInfo:req.body, msg:'성공/실패'})
// 실패면 userInfo 안보내기
// 또는 msg 대신 isLogin True

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});