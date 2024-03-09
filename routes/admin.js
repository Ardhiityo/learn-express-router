const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    } else {
        res.send('you\'re not admin');
    }
})

router.get('/', (req, res, next) => {
    const {
        admin = '123'
    } = req.cookies;
    res.cookie('admin', '123osdnvsd');
    res.send(`You\'re Admin, ${admin}`);
})

module.exports = router;