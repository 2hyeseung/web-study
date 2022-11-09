const mysql = require('mysql');

// DB 연결 정보
const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'kdt',
});

exports.getVisitors = (cb) => {
  // BEFORE
  //     return[
  //         {id:1, name:'홍길동', comment:'내가왔다'},
  //         {id:2, name:'이찬혁', comment:'으라차차'},
  //     ];
  // AFTER - mysql 변경
  // query(SQL, callback)
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log('Visitor.js: ', rows);
    cb(rows);
  });
};

exports.postVisitor = (data, cb) => {
  // data : 사용자가 입력한 정보
  conn.query(
    `INSERT INTO visitor (name, comment) VALUES('${data.name}','${data.comment}')`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      // console.log('Visitor.js',rows);
      cb(rows.insertId);
    });
};

exports.deleteVisitor = (id, callback) => {
  // id: 사용자가 삭제버튼을 클릭한 그 행의 id 값
  // console.log('id: ', id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }

    //   console.log('Visitor.js: ', rows);
    callback(true); // true : 삭제 성공을 의미
  });
};


exports.getVisitor = (id, cb) => {
  conn.query(`SELECT * FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) {
      throw err;
    }
    // console.log('Visitor.js', rows);
    cb(rows[0]);
  })
}

exports.patchVisitor = (data, cb) => {
  conn.query(
    `UPDATE visitor SET name='${data.name}', comment='${data.comment}' WHERE id=${data.id}`, (err, rows) => {
      if (err) {
        throw err;
      }
      // console.log('Visitor.js', rows);
      cb(true); // true: 수정 성공을 의미
    });
};