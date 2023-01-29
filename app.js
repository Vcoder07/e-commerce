var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

//Loads the handlebars module
//const handlebars = require('express-handlebars');
const { engine } = require('express-handlebars'); //importing handle bar
//Sets our app to use the handlebars engine
app.set('view engine', 'hbs'); //setting up view engine ; same as line 35 for jade
//instead of app.engine('handlebars', handlebars({
app.engine('hbs', engine({
    layoutsDir: __dirname + '/views/layouts',
    extname: 'hbs', // configuring hbs settings; view/layout 
    //new configuration parameter
    defaultLayout: 'main', // public layout and private layout. public layout = login button etc. private layout= internal pages account page and personal information. 
    partialsDir: __dirname + '/views/partials/', //header and footer code and this can be imported; cards for landingpage searchpage or logoutpage. piece of code which can be used on different pages
    helpers: { select: function(selected, options) {
        return options.fn(this).replace(
            new RegExp(' value=\"' + selected + '\"'),
            '$& selected="selected"');
        }
    }
}));
app.use('/', express.static(path.join(__dirname, './assets'))); // assests= default folder we can add images css and js files. 

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;

// Define a port to listen to requests on.
const HTTP_PORT = process.env.PORT || 8080;

// Call this function after the http server starts listening for requests.
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
}

// Listen on port 8080. The default port for http is 80, https is 443. We use 8080 here
// because sometimes port 80 is in use by other applications on the machine
app.listen(HTTP_PORT, onHttpStart);
