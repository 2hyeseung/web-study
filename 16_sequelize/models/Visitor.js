// 테이블 구조 참고
// CREATE TABLE visitor(
//     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
//     name VARCHAR(10) NOT NULL,
//     comment MEDIUMTEXT
// );

// visitor 모델(-> 테이블 구조) 구조
// sequelize 모델이랑 mysql table 연결
const Visitor = function(Sequelize, DataTypes){
    // Sequelize : model/index.js의 sequelize
    // DataTypes : model/index.js의 Sequelize

    // Sequelize.define('모델 이름', {컬럼 정의}, {모델 옵션 정의});
    const model = Sequelize.define(
        'visitor',
        {
            id:{
                type : DataTypes.INTEGER,
                allowNull : false,
                primaryKey : true,
                autoIncrement : true,
            },
            name:{
                type : DataTypes.STRING(10),    // VARCHAR(10)
                allowNull : false,
            },
            comment : {
                type : DataTypes.TEXT('medium') // MEDIUMTEXT
            }
        },
        {
            tableName : 'visitor',  // 실제 DB의 테이블 이름
            freezeTableName : true, // 테이블 이름 고정
            timestamps : false,     // 데이터 추가/수정 시간을 자동으로 컬럼 만들어서 기록해줌
        },
    );
    return model;
};

module.exports = Visitor;