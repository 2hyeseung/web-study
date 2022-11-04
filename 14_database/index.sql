-- #####################################################################################
--                                           DDL
-- #####################################################################################
-- Data Definition Language : 데이터베이스/테이블 정의


-- [데이터베이스 관련 명령어]
-- 1. 데이터베이스 생성 (+ 한글 인코딩)
CREATE DATABASE kdt DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

-- 2. 데이터베이스 생성 확인 (목록 조회)
SHOW databases;

-- 3. 데이터베이스 사용 선언
USE kdt;

-- 4. 데이터베이스 삭제
DROP DATABASE kdt;


-- [테이블 관련 명령어]
-- 1. 테이블 생성
-- CREATE TABLE 테이블명{
--     필드1 값형식,
--     필드2 값형식
-- }
-- 제약조건
-- NOT NULL : NULL 허용 X
-- AUTO_INCREMENT : 자동 숫자 증가 1,2,3, ...
-- PRIMARY KEY : 기본키
-- DEFAULT : 기본값
-- UNIQUE : 중복 허용 X
CREATE TABLE user(
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- 2. 테이블 목록 확인
SHOW tables;

-- 3. 테이블 구조 확인
DESC user;

-- 4. 테이블 삭제
-- DROP : 다 삭제 (구조 자체를 삭제)
-- TRUNCATE : 초기화 (모든 행 삭제)
DROP TABLE user;
TRUNCATE TABLE user;

-- 5. 테이블 수정 (구조 수정)
-- 5-1. 컬럼 추가 (ADD)
ALTER TABLE user ADD new_column VARCHAR(10);
-- 5-2. 컬럼 수정 (MODIFY)
ALTER TABLE user MODIFY new_column INT;
-- 5-3. 컬럼 삭제 (DROP)
ALTER TABLE user DROP new_column;




-- #####################################################################################
--                                           DML
-- #####################################################################################
-- Data Manipulation Language : 데이터 조작어
-- 내부 데이터를 관리하기 위한 언어

-- [Create - INSERT]
-- : 데이터 추가
-- AUTO_INCREMENT는 값을 넣지않거나 NULL이라고 넣으면 알아서 숫자가 지정됨
-- AUTO_INCREMENT는 PK에만
-- INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES 
    ('김민정', 20, '서울특별시 마포구'),
    ('이지수',30,'서울특별시 강남구'),
    ('최솔이',22,'대구광역시 동구'),
    ('한소희',25,'부산광역시 관악구'),
    ('정세희',19,'서울특별시 노원구'),
    ('이한이',23,'서울특별시 강서구'),
    ('이지은',32,'부산광역시 동구'),
    ('윤세희',37,'강원도 강릉시'),
    ('박수진',26,'충청남도 공주시'),
    ('박찬희',40,'강원도 속초시'),
    ('권희수',36,'서울특별시 영등포구');

-- [Read - SELECT]
-- : 데이터 조회
SELECT * FROM user;
SELECT name FROM user;
SELECT age, name FROM user;
-- WHERE절 : 특정 조건을 만족하는 행 (RECORD, TUPLE) 선택
SELECT * FROM user WHERE AGE>=25 ORDER BY AGE ASC;
SELECT NAME FROM user WHERE ID=7;
SELECT ID,NAME FROM user WHERE name='이지은';
-- ORDER BY절 : 데이터 정렬
SELECT * FROM user ORDER BY age DESC;
SELECT * FROM user WHERE ID>7 ORDER BY AGE;
-- LIKE : 패턴 조회
-- % : 0개 이상의 문자
-- _ : 1개의 단일 문자
SELECT * FROM user WHERE address LIKE '서울%'; -- '서울'로 시작하는 주소
SELECT * FROM user WHERE name LIKE '__희';  -- 마지막 글자가 '희'
SELECT * FROM user WHERE name LIKE '%희%';  -- 이름에 '희'가 있는 데이터
SELECT * FROM user WHERE address LIKE '%광역%';  -- 주소에 '광역'가 있는 데이터
SELECT * FROM user WHERE name LIKE '__희' ORDER BY AGE DESC;
-- LIMIT : 데이터 개수 제한
SELECT * FROM user LIMIT 3; 
SELECT * FROM user WHERE address LIKE '서울%' LIMIT 2;
-- BETWEEN a AND b : 사이값 조회
SELECT * FROM user WHERE age BETWEEN 25 AND 30;
-- IN (list) : 리스트 있는 것 중에 일치하면 참
SELECT * FROM user WHERE age IN(20,21,22,23);
-- IS NULL
-- IS NOT NULL
INSERT INTO user (name, age) VALUES ('서현승','28');
SELECT * FROM user WHERE ADDRESS IS NULL;
SELECT * FROM user WHERE ADDRESS IS NOT NULL;
-- 논리연산자 : AND, OR, NOT
SELECT * FROM user WHERE address IS NOT NULL AND age<25;
SELECT * FROM user WHERE address IS NOT NULL OR age<25;
SELECT * FROM user WHERE name LIKE "이%" AND age=23;

-- [Update - UPDATE]
-- : 데이터 갱신(수정)
-- 테이블 데이터를 UPDATE/DELETE 하려고 할 때 KEY 컬럽을 이용해서 수정/삭제하는 것이 바람직
-- 주의) UPDATE WHERE절 미사용시, 모든 행의 데이터가 변경됨
UPDATE user SET address='서울특별시 강북구' WHERE name='이한이';
UPDATE user SET address='서울특별시 강북구' WHERE id='6';
UPDATE user SET address='제주특별자치도 제주시', name='이지현' WHERE id='2';

-- [Delete - DELETE]
-- : 데이터 삭제
-- 주의) DELETE WHERE절 미사용시, 모든 행의 데이터가 삭제됨
DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id>8;
