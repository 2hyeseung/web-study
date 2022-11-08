
const { user } = require('../../15_mvc/controller/Cuser');
const UserInfo = require('../model/UserInfo');

exports.main = (req,res) => {
    res.render('index',{ title: '동적 폼 실습' });
};

exports.login = (req,res) => {
    // console.log(UserInfo.userInfo());
    let users=UserInfo.users.split("\n");
    let user=[];
    for(let i=0; i<users.length; i++){
        user[i]=users[i].split("//");
    }
    for(let i=0; i<user.length;i++){
        if(user[i][0]==req.body.userId && user[i][1]== req.body.userPw){
            res.send({ userInfo: user[i], isSuccess: true });
        }
    }
    res.send({ isSuccess: false });
}