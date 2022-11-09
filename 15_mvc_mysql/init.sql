CREATE TABLE visitor(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

INSERT INTO VISITOR (name, comment) VALUES 
    ('홍길동','내가 왔다.'),
    ('이찬혁','으라차차');

INSERT INTO VISITOR (name, comment) VALUES ('AAA','ㅋㅋ');

-- MySQL 사용자 추가하기
CREATE USER 'user'@'%' IDENTIFIED BY '1234';
-- user 계정에 DB 권한 부여 (모든 DB 접근 가능하도록)
GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' WITH GRANT OPTION;
-- 현재 사용중인 MySQL 캐시를 지우고 새로운 설정 적용
FLUSH PRIVILEGES;

-- MySQL 비밀번호 변경하고 싶다면?
ALTER USER 'user'@'%' IDENTIFIED WITH mysql_native_password BY '비밀번호';

DELETE FROM visitor WHERE id>2;

SELECT * FROM visitor WHERE id=1;

UPDATE visitor SET name='누구' comment='아무말' WHERE id = 1;