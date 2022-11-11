// sequelize-cli가 자동 생성한 파일

'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['development'];
const db = {};

// sequelize 객체 선언시 매개변수로 정보들을 받음
let sequelize = new Sequelize(config.database, config.username, config.password, config);

// db = { sequelize:sequelize, Sequelize:Sequelize }
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// models/Visitor.js 정의한 model이 db.Visitor에 들어감
// db = { sequelize:sequelize, Sequelize:Sequelize, Visitor:__ }
db.Visitor = require('./Visitor')(sequelize,Sequelize);

// db 변수 내보냄 -> 다른 파일에서 사용
module.exports = db;
