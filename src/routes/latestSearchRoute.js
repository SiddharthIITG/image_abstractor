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
          const db2 = client.db(dbName);
          var dbCount = await db2.collection('searches').count();
          // console.log(dbCount);
          
          // console.log(response);
          if (dbCount < 10) {
            var jsonObj = await db2.collection('searches').find({}).toArray();
            res.render('index', {jsonObj: jsonObj});
          }
          else {
            var jsonObj = await db2.collection('searches').find({}, {'_id': false}).sort({time:-1}).limit(10).toArray();
            res.render('index', {jsonObj: jsonObj});
          }
          db2.close();
        } catch (err) {
          debug(err.stack)
        }
        
        client.close();
      }());
})

module.exports = latestSearchRouter;