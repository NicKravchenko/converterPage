const express = require('express');
const bodyParser = require('body-parser');


const ascRouter = require('./routes/asc');
const numberRouter = require('./routes/number');
const mainRouter = require('./routes/main')

const app = express();

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));

app.use(mainRouter);
app.use('/asc' ,ascRouter);
app.use('/number', numberRouter);


app.listen(3000, err => {
    console.log(err);
});