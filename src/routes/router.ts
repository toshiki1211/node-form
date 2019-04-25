import express from 'express';
const router = express.Router();


// Controller
import * as userController from "../controller/user";


router.get('/', (req, res) => {
    res.render('index', { test: res });
});

router.get('/login', (req, res) => {
    res.render('login');
});
 
router.get('/register', userController.regist);
router.post('/register', userController.regist);

router.post('/register-confirm', userController.registConfirm);

module.exports = router;
