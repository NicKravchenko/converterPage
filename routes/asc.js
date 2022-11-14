const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('Pages/asc', {
        title : 'Asc convertor'
    });
});

module.exports = router;