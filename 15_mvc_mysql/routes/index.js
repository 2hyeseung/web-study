const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET / => localhost:PORT/ // 메인
router.get('/', controller.main);

// GET /visitor => localhost:PORT/visitor   // 전체 조회
router.get('/visitor', controller.visitor);

// POST /visitor/write => localhost:PORT/visitor/write  // 하나 추가
router.post('/visitor/write',controller.postVisitor);

// POST /visitor/delete => localhost:PORT/visitor/delete  // 하나 삭제
router.delete('/visitor/delete',controller.deleteVisitor);

module.exports = router;