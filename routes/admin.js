const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('you\'re not admin');
})

router.get('/', (req, res, next) => {
    res.send('You\'re Admin');
})

module.exports = router;