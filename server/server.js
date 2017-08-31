var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');


var passport = require('./strategies/mongo.localstrategy');
var sessionConfig = require('./modules/session.config');
var port = process.env.PORT || 8000;

//DB Module
var db = require('./modules/db.config.js');

// Route includes
var indexRouter = require('./routes/index.router');
var userRouter = require('./routes/user.router');
var registerRouter = require('./routes/register.router');
var phrasebookRouter = require('./routes/phrasebook.router');



// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve back static files
app.use(express.static('./server/public'));


// Passport Session Configuration
app.use(sessionConfig);

// Start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/phrasebook', phrasebookRouter);

// Catch all bucket, must be last!
app.use('/', indexRouter);

// Listen //
app.listen(port, function(){
   console.log('Listening on port:', port);
});
