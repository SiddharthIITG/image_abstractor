const express = require('express');
const imgSearchRouter = express.Router();


imgSearchRouter.get(function(req, res) {
      res.send('Here'); 
  })


module.exports = imgSearchRouter;