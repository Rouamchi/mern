const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connection = require('./connection')
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const sectionsRouter = require('./routes/sections');
const membersRouter = require('./routes/members');
const topicsSportRouter = require('./routes/topicsSport');
const topicsNewsRouter = require('./routes/topicsNews');
const topicsArtRouter = require('./routes/topicsArt');
const commentsRouter = require('./routes/comments');
const topicsDetailsRouter = require('./routes/topicsDetails')
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//to accept data from locahost
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // Pass to next layer of middleware
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sections', sectionsRouter);
app.use('/members', membersRouter);
app.use('/topicsSport', topicsSportRouter);
app.use('/topicsNews', topicsNewsRouter);
app.use('/topicsArt', topicsArtRouter);
app.use('/comments', commentsRouter);
app.use('/topicsDetails', topicsDetailsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 4000);
  res.render('error');
});

module.exports = app;
