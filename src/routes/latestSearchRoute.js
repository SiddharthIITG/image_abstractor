const express = require('express');
const latestSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const debug = require('debug');
const mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

latestSearchRouter.get('/', function (req, res) {
  
})

module.exports = latestSearchRouter;