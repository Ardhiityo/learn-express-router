const path = require('path');
const express = require('express');
const app = express();
const cookies = require('cookie-parser');

const theaterRouter = require('./routes/theater');
const adminRouter = require('./routes/admin');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cookies());
app.use('/theater', theaterRouter);
app.use('/admin', adminRouter);




app.listen(8080, () => {
    console.log('listening on port http://localhost:8080');
})