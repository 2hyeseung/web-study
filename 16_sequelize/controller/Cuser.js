const models = require('../models'); 

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
    // [Before]
    // User.postSignup(req.body,(result)=>{
    //     res.send({
    //         userid:req.body.userid,
    //         name:req.body.name, 
    //         pw:req.body.pw,
    //     });
    // });

    // [After]
    models.User.create({
        userid : req.body.userid,
        name : req.body.name,
        pw : req.body.pw,
    }).then(result => {
        console.log("## controller > CUser.js - postSignup : ",result)
        res.send({
            userid:req.body.userid,
            name:req.body.name, 
            pw:req.body.pw,
        });
    })
};

exports.postSignin = (req, res) => {
    // [Before]
    // User.postSignin(req.body, (result) => {
    //     res.send(result);
    // })

    // [After]
    models.User.findOne({
        where : {userid : req.body.userid, pw : req.body.pw}
    }).then(result => {
        console.log("## controller > CUser.js - postSignin : ",result)
        res.send(result);
    })

}

exports.postProfile = (req,res) => {
    // [Before]
    // User.postProfile(req.body, (result) => {
    //     res.render('profile',{data:result});
    // })

    // [After]
    models.User.findOne({
        where : {userid : req.body.userid}
    }).then(result => {
        console.log("## controller > CUser.js - postProfile : ",result)
        res.render('profile',{data:result});
    })
}

exports.patchProfile = (req,res) => {
    // [Before]
    // User.patchProfile(req.body,(result)=>{
    //     res.send(result);
    // })

    // [After] - 객체 2개
    models.User.update(
        {
            pw : req.body.pw,
            name : req.body.name
        },
        {
            where : {id : req.body.id}
        }
    ).then(result => {
        res.send(true);
    })
}

exports.deleteProfile = (req,res) => {
    // [Before]
    // User.deleteProfile(req.body.id, (result) => {
    //     res.send(result);
    // });

    // [After]
    models.User.destroy({
        where : {id : req.body.id}
    }).then(result => {
        res.send(true);
    })
}
