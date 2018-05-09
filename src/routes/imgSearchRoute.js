const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');


imgSearchRouter.get(/\w/, function(req, res) { 
  const query = req.query;
  const searchTerm = req.params.search;
  console.log(req);
  var cache = [];
  res.send(JSON.stringify(req, function(key, value) {
    if (typeof value === 'object' && value !== null) {
        if (cache.indexOf(value) !== -1) {
            // Circular reference found, discard key
            return;
        }
        // Store value in our collection
        cache.push(value);
      }
    return value;
    }, 2));
  cache = null;
  })


module.exports = imgSearchRouter;