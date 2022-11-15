const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    const mode = req.body.mode ? req.body.mode : "charToAsc";
    const asc = 3;
    const char = 'A';

    res.render('Pages/asc', {
        title : 'Asc convertor',
        mode: mode,
        asc : asc,
        char : char
    });
});

router.post('/changeMode', (req, res, next) => {
    const mode = req.body.mode;

    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode
        });
});


module.exports = router;