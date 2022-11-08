const Visitor = require('../model/Visitor');

exports.main = (req,res) => {
    res.render('index');
};

exports.visitor = (req,res) => {
    //  BEFORE
    // console.log(Visitor.getVisitors());
    // res.render('visitor',{data: Visitor.getVisitors()});

    // AFTER
    Visitor.getVisitors((result)=>{
        // console.log('Cvisitor.js :',result);
        res.render('visitor',{data:result});
    })
}

exports.postVisitor = (req,res) => {
    // console.log(req.body);
    Visitor.postVisitor(req.body,(result)=>{
        // console.log('Cvisitor.js :',result);
        res.send({
            id:result,      // result == cb(rows.insertId)
            name:req.body.name, 
            comment:req.body.comment,
        });
    });
};

exports.deleteVisitor = (req,res) => {
    // console.log(req.body);
    // console.log(req.body.id);
    Visitor.deleteVisitor(req.body.id, (result) => {
        // console.log(`Cvisitor.js : `,result);
        res.send('삭제 성공!!!');
    });
}