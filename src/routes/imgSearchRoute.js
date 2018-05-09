const express = require('express');
const imgSearchRouter = express.Router();


imgSearchRouter.get(/\w/, function(req, res) {
  const query = req.query;
  const searchTerm = req.params.search;
  
  res.json(JSON.stringify(req)); 
  })


module.exports = imgSearchRouter;