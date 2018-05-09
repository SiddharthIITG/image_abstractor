const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');

imgSearchRouter.get(/\w/, function(req, res) { 
  
  const query = req.query;
  const searchTerm = req.params.search;
  const cx = '012680039554584055873:ni7dars4bne';
  // console.log(Object.keys(req));
  console.log(req._parsedUrl.pathname);
  console.log(req.query.id);
  var cache = [];
  res.end(JSON.stringify(req, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
      }
    return value;
    }, 4));
  cache = null;
  })

module.exports = imgSearchRouter;