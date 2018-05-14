const express = require('express');
const latestSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const debug = require('debug');
const mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

latestSearchRouter.get('/', function (req, res) {
  // Connection URL. This is where your mongodb server is running.
    const search_db = `mongodb://${process.env.USER}:${process.env.PASSWORD}@ds119640.mlab.com:19640/image_abs_search_db`;
    const dbName = 'image_abs_search_db';
    // Use connect method to connect to the Server
    (async function mongo() {
        let client;
        try {
          client = await MongoClient.connect(search_db);
          console.log('Connected correctly to server again');
          const db = client.db(dbName);
          // var dbCount = await db.collection('searches').count();
          const response = await db.collection('searches').find();
          console.log(response);
          res.end(response);
          db.close();
        } catch (err) {
          debug(err.stack)
        }
        
        client.close();
      }());
})

module.exports = latestSearchRouter;