// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const debug = require('debug');
const morgan = require('morgan');
const imgSearchRouter = require('./src/routes/imgSearchRoute');

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.use(morgan('tiny'));
app.use('/api/imagesearch', imgSearchRouter);

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



// app.get('/api/imagesearch', function (req, res) {
//   const query = req.query;
//   res.send(query);
// });
