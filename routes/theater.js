const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Index Theater');
})

router.get('/:id', (req, res) => {
    res.send('Id Theater');
})

module.exports = router;