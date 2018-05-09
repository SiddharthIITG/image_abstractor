const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const debug = require('debug');

imgSearchRouter.get(/\w/, function(req, res) { 
  
  const query = req.query;
  const cx = '012680039554584055873:ni7dars4bne';
  const offset = query.offset;
  const searchTerm = req._parsedUrl.pathname.slice(1); 

  console.log(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&offset=${offset}&cx=${cx}`);
  request(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&offset=${offset}&cx=${cx}`, function (error, response, body) {
    if (error) {
      debug(error);
    }
    if (!error && response.statusCode == 200) {
      console.log(body) // Print the google web page.
      console.log(response);
      res.json(body);
    }
  })
  var cache = [];
  // res.end(JSON.stringify(req, function(key, value) {
  //   if (typeof value === 'object' && value !== null) {
  //       if (cache.indexOf(value) !== -1) {
  //           // Circular reference found, discard key
  //           return;
  //       }
  //       // Store value in our collection
  //       cache.push(value);
  //     }
  //   return value;
  //   }, 4));
  cache = null;
  })

module.exports = imgSearchRouter;