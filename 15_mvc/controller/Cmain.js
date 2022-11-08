const Comment = require('../model/Comment');

exports.main = (req,res) => {
    res.render('index');
};

exports.comments = (req,res) => {
    res.render('comments',{commentInfos : Comment.commentInfos()});
}

exports.comment = (req,res) => {
    const commentId = req.params.id;
    if(commentId <1 || commentId > Comment.commentInfos().length || isNaN(commentId)){
        return res.render('404');
    }
    res.render('comment', {commentInfo: Comment.commentInfos()[commentId-1]});
}