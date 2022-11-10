// TODO: DB(mysql) 연결
// TODO: 모델 코드
const mysql = require('mysql');

// DB 연결 정보
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt',
  });
  
exports.postSignup = (data, cb) => {
    conn.query(
      `INSERT INTO user (userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}')`, (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('### User.js - postSignup : ',rows);
        cb(rows);
      });
  };

exports.postSignin = (data, cb) => {
    // console.log("data : ", data.userid);
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}' AND pw='${data.pw}'`, (err, rows) => {
    if (err) {
      throw err;
    }
    console.log('### User.js - postSignin : ', rows[0]);
    cb(rows[0]);
  })
}

exports.postProfile = (data,cb) => {
    conn.query(`SELECT * FROM user WHERE userid='${data.userid}'`, (err, rows) => {
        if (err) {
          throw err;
        }
        console.log('### User.js - postProfile : ',rows[0]);
        cb(rows[0]);
      })
}

exports.patchProfile = (data, cb) => {
    conn.query(
      `UPDATE user SET pw='${data.pw}', name='${data.name}' WHERE id=${data.id}`, (err, rows) => {
        if (err) {
          throw err;
        }
        cb(true); // true: 수정 성공을 의미
      });
  };
  

  exports.deleteProfile = (id, cb) => {
    conn.query(`DELETE FROM user WHERE id=${id}`, (err, rows) => {
      if (err) {
        throw err;
      }
      cb(true); // true : 삭제 성공을 의미
    });
  };
  