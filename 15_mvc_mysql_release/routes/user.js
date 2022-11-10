// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// GET / => localhost:PORT/ // 메인
router.get('/', controller.main);
router.get('/signin', controller.signin);
router.get('/signup', controller.signup);

router.post('/signin', controller.postSignin);
router.post('/signup', controller.postSignup);

router.post('/profile',controller.postProfile);
router.post('/profile/edit',controller.patchProfile);
router.post('/profile/delete',controller.deleteProfile);

module.exports = router;