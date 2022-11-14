const express = require('express');
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8000;

app.set('view engine','ejs');
app.use('/views', express.static(__dirname+'/views'));
app.use(cookieParser());


const cookieConfig = {
    httpOnly: true,     
    // maxAge : 24*60*60*1000, // 하루 
    maxAge : 60*1000, 
}

app.get('/',(req,res)=>{
    res.render('index',{ popup : req.cookies.popup });
})
app.post('/setCookie',(req,res)=>{
    // 쿠키 설정하고 응답
    res.cookie('popup','hidden',cookieConfig);  
    res.send('쿠키 설정 성공');
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})