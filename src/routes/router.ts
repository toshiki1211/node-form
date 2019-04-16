import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { test: res });
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
