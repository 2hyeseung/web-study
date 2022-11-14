const express = require('express');
const controller = require('../controller/Cvisitor');
const user_controller = require('../controller/Cuser');
const router = express.Router();

// GET / => localhost:PORT/ // 메인
router.get('/', controller.main);

// Sequelize 수업
router.get('/visitor', controller.visitor);
router.post('/visitor/write',controller.postVisitor);
router.delete('/visitor/delete',controller.deleteVisitor);
router.get('/visitor/get',controller.getVisitor);
router.patch('/visitor/edit',controller.patchVisitor);

// 실습 39
// router.get('/user', controller.main);

router.get('/user/signin', user_controller.signin);
router.get('/user/signup', user_controller.signup);

router.post('/user/signin', user_controller.postSignin);
router.post('/user/signup', user_controller.postSignup);

router.post('/user/profile',user_controller.postProfile);
router.post('/user/profile/edit',user_controller.patchProfile);
router.post('/user/profile/delete',user_controller.deleteProfile);


module.exports = router;