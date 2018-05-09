// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const debug = require('debug');
const morgan = require('morgan');
const imgSearchRouter = require('./src/routes/imgSearchRoute');
const bodyParser = require('body-parser');
const ejs = require('ejs');


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

app.set('views', './src/views');
app.set('view engine', 'ejs');
// app.set('json spaces', 2);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(morgan('tiny'));
app.use(bodyParser.json());         
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api/imagesearch', imgSearchRouter);


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.render('index', {jsonObj: {}});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



// app.get('/api/imagesearch', function (req, res) {
//   const query = req.query;
//   res.send(query);
// });
