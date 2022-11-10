const User = require('../model/User');

exports.main = (req,res) => {
    res.render('index');
};

exports.signin = (req,res) => {
    res.render('signin');
};

exports.signup = (req,res) => {
    res.render('signup');
};

exports.postSignup = (req,res) => {
    User.postSignup(req.body,(result)=>{
        console.log('### Cuser.js - postSignup - req.body :',req.body);
        console.log('### Cuser.js - postSignup - result : ',result);
        res.send({
            userid:req.body.userid,
            name:req.body.name, 
            comment:req.body.comment,
            // data:req.body
        });
    });
};

exports.postSignin = (req, res) => {
    
    User.postSignin(req.body, (result) => {
        console.log('### Cuser.js - postSignin - req.body :',req.body);
        console.log('### Cuser.js - postSignin - result : ',result);
        res.send(result);
        // if(result === undefined){
        //     res.send(false);
        // }else{ // 성공
        //      res.send(true);
        // }
    })
}

exports.postProfile = (req,res) => {
    User.postProfile(req.body, (result) => {
        console.log('### Cuser.js - postProfile - req.body :',req.body);
        console.log('### Cuser.js - postProfile - result : ',result);
        res.render('profile',{data:result});
    })
}

exports.patchProfile = (req,res) => {
    User.patchProfile(req.body,(result)=>{
        console.log('### Cuser.js - patchProfile - req.body :',req.body);
        console.log('### Cuser.js - patchProfile - result : ',result);
        // res.send('수정 성공!!!');
        res.send(result);
    })
}

exports.deleteProfile = (req,res) => {
    User.deleteProfile(req.body.id, (result) => {
        console.log('### Cuser.js - deleteProfile - req.body.id :',req.body);
        console.log('### Cuser.js - deleteProfile - result : ',result);
        // res.send('삭제 성공!!!');
        res.send(result);
    });
}
