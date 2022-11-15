const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    const mode = req.body.mode ? req.body.mode : "charToAsc";
    const asc = 3;
    const char = 'A';
    console.log("Im in main");
    res.render('Pages/asc', {
        title : 'Asc convertor',
        mode: mode,
        asc : asc,
        char : char
    });
});

router.post('/changeMode', (req, res, next) => {
    const mode = req.body.mode;

    console.log("Im in change mod");


    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode,
        asc : "",
        char : ""
        });
});

router.post('/ascToChar', (req, res, next) => {
    const mode = req.body.mode;
    console.log ( mode);
    const asc = req.body.asc;
    const char = String.fromCharCode(asc);

    res.render("Pages/asc",{
        title : 'Asc convertor',
        mode: mode,
        asc : asc,
        char : char
        });

})


module.exports = router;