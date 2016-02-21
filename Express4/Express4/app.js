var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

/*
 * 
 * //Web camera 
var Camera = require("./Camera");
var cam = new Camera("SmartHomeCapture.jpg", function (err) {
    if (err) {
        console.error(err);
    }
});


// blink on GPIO 5
var MyBlinky = require("./Blinky");
var blink = new MyBlinky(5);


app.get("/blink", function (req, res) {
    
    blink.doBlink();
    
    res.set('Content-Type', 'text/plain');
    res.send('Switch value: ' + blink.isOn() + '\n');
});

app.get("/cam/takePhoto", function (req, res) {
    cam.takePhoto(function (err, file) {
        console.log(file);
        
        //res.sendFile(file);
        if (err) {
            res.set('Content-Type', 'text/plain');
            res.send(err.message);
        }
        else {
            res.set('Content-Type', 'image/jpeg');
            res.sendFile(file.path);
        }
    });
});


 * 
 * <div class='img'>
    <img src='/images/test.png'>
    </div>
 var http = require('http');

var uwp = require("uwp");
uwp.projectNamespace("Windows");


uwp.close();
 */ 
module.exports = app;

