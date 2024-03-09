const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const theaterRouter = require('./routes/theater');
const adminRouter = require('./routes/admin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookieParser('secret-key'));
app.use('/theater', theaterRouter);
app.use('/admin', adminRouter);

app.get('/sign', (req, res) => {
    res.cookie('tas', 'ransel', {signed: true});
    console.log(req.signedCookies);
    const {tas} = req.signedCookies;
    res.send(`Sign Cookies, ${tas}`);
})


app.listen(8080, () => {
    console.log('listening on port http://localhost:8080');
})