const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');


imgSearchRouter.get(/\w/, function(req, res) {
  res.set('Content-Type', 'application/json');
  
  const query = req.query;
  const searchTerm = req.params.search;
  console.log(req.query);
  res.send((req.body)); 
  })


module.exports = imgSearchRouter;