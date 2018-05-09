const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');


imgSearchRouter.get(/\w/, function(req, res) {
  const query = req.query;
  const searchTerm = req.params.search;
  console.log(req.query);
  res.send(JSON.stringify(req.body)); 
  })


module.exports = imgSearchRouter;