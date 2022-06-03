
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("express-async-errors")
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const {abort} = require("./helper");
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));
app.use('/comments',require('./routes/comments') );


app.use((err, req, res, next) => {
    console.log(err)
    return  abort(res, 500, "خطای سمت سرور")
})

module.exports = app;