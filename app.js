
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require("express-async-errors")
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');
const app = express();

// mongoose.connect("mongodb://localhost:27017").then(() => console.log("db connected")).catch(err => "db err:" + err)

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const {abort} = require("./helper");
app.use('/users', usersRouter);
app.use('/posts', postsRouter);


app.use((err, req, res, next) => {
    console.log(err)
    return  abort(res, 500, "خطای سمت سرور")
})

module.exports = app;
