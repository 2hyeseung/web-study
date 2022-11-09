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

// POST /visitor/get => localhost:PORT/visitor/get  // 하나 조회
router.get('/visitor/get',controller.getVisitor);

// PATCH /visitor/edit => localhost:PORT/visitor/edit  // 하나 수정
router.patch('/visitor/edit',controller.patchVisitor);

module.exports = router;