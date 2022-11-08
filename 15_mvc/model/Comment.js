// DB로부터 댓글 목록을 받아왔다고 가정
// 배열 : 전체 댓글
// 각 객체 : 댓글 하나
exports.commentInfos = () =>{
    return[{
        id : 1,
        userid : 'helloworld',
        date : '2022-10-31',
        comment : '안녕하세요 ^~^'
    },{
        id : 2,
        userid : 'user2',
        date : '2022-11-07',
        comment: '안녕하세요!'
    },{
        id : 3,
        userid : 'user33',
        date : '2022-11-05',
        comment: '안녕하세요33!'
    },{
        id : 4,
        userid : 'user4',
        date : '2022-11-04',
        comment: '안녕하세요44!'
    }]
}