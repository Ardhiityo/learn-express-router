const path = require('path');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

const theaterRouter = require('./routes/theater');
const adminRouter = require('./routes/admin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const secret = 'secret-key';
app.use(cookieParser(secret));
app.use('/theater', theaterRouter);
app.use('/admin', adminRouter);
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: false
    }
}))

app.get('/sign', (req, res) => {
    res.cookie('tas', 'ransel', {
        signed: true
    });
    console.log(req.signedCookies);
    const {
        tas
    } = req.signedCookies;
    res.send(`Sign Cookies, ${tas}`);
})

app.get('/count', (req, res) => {
    if (req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`Count ${req.session.count}`);
})

app.get('/register', (req, res) => {
    const {
        name = 'Anonym'
    } = req.query;
    req.session.username = name;
    res.redirect('/dashboard');
})

app.get('/dashboard', (req, res) => {
    res.send(`Welcome back ${req.session.username}`);
})

app.listen(8080, () => {
    console.log('listening on port http://localhost:8080');
})