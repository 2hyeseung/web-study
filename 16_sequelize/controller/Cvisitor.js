// [Before]
// const Visitor = require('../model/Visitor');
// [After]
const models = require('../models');    // index.js가 내보내는 db

exports.main = (req,res) => {
    res.render('index');
};

exports.visitor = (req,res) => {
    // [Before]
    // Visitor.getVisitors((result)=>{
    //     res.render('visitor',{data:result});
    // })

    // [After]
    models.Visitor.findAll().then(result => {
        console.log("## controller > Cvisitor.js - visitor : ",result);
        res.render('visitor',{data:result});
    })
}

exports.postVisitor = (req,res) => {
    // [Before]
    // Visitor.postVisitor(req.body,(result)=>{
    //     res.send({
    //         id:result,     
    //         name:req.body.name, 
    //         comment:req.body.comment,
    //     });
    // });

    // [After]
    models.Visitor.create({
        name : req.body.name,
        comment : req.body.comment,
    }).then(result => {
        console.log("## controller > Cvisitor.js - postVisitor : ",result.id)
        res.send({
            id:result.id,     
            name:req.body.name, 
            comment:req.body.comment,
        });
    })
};

exports.deleteVisitor = (req,res) => {
    // [Before]
    // Visitor.deleteVisitor(req.body.id, (result) => {
    //     res.send('삭제 성공!!!');
    // });

    // [After]
    models.Visitor.destroy({
        where : {id : req.body.id}
    }).then(result => {
        res.send('삭제 성공!!!');
    })
}

exports.getVisitor = (req,res) => {
    // [Before]
    // Visitor.getVisitor(req.query.id, (result) => {
    //     res.send(result);
    // })

    // [After]
    models.Visitor.findOne({
        where : {id : req.query.id}
    }).then(result => {
        console.log("## controller > Cvisitor.js - getVisitor : ",result)
        res.send(result);
    })
}

exports.patchVisitor = (req,res) => {
    // [Before]
    // Visitor.patchVisitor(req.body,(result)=>{
    //     res.send('수정 성공!!!');
    // })

    // [After] - 객체 2개
    models.Visitor.update(
        {
            name : req.body.name,
            comment : req.body.comment
        },
        {
            where : {id : req.body.id}
        }
    ).then(result => {
        res.send('수정 성공!!!');
    })
}
