const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('Pages/number', {
        title: 'Number convertor'
    });
});

module.exports = router;