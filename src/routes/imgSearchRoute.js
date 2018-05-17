const express = require('express');
const imgSearchRouter = express.Router();
const bodyParser = require('body-parser');
const request = require('request');
const debug = require('debug');
const mongodb = require('mongodb');
//We need to work with "MongoClient" interface in order to connect to a mongodb server.
const MongoClient = mongodb.MongoClient;

imgSearchRouter.get(/\w/, function(req, res) { 
  
  const query = req.query;
  const cx = '012680039554584055873:ni7dars4bne';
  const offset = query.offset;
  var searchTerm = req._parsedUrl.pathname.slice(1); 

  console.log(`https://www.googleapis.com/customsearch/v1?q=${searchTerm}&start=${offset}&cx=${cx}`);
  request(`https://www.googleapis.com/customsearch/v1?key=${process.env.KEY}&q=${searchTerm}&start=${offset}&cx=${cx}&imgSize=large`, function (error, response, body) {
    if (error) {
      debug(error);
    }
    if (!error && response.statusCode == 200) {
        var jsonObjDisplay = [];
        JSON.parse(body).items.forEach(item => {
        var object = {};
        object.title = item.title;
        if ("pagemap" in item) {
            if ("cse_image" in item.pagemap)
              object.url = `<a href = ${item.pagemap.cse_image[0].src}>` + item.pagemap.cse_image[0].src + '</a>' ;
            if ("cse_thumbnail" in item.pagemap)  
              object.thumbnail = `<a href = ${item.pagemap.cse_thumbnail[0].src}>` + item.pagemap.cse_thumbnail[0].src + '</a>';
        }
        object.context = `<a href = ${item.link}>` +  item.link + '</a>';
        jsonObjDisplay.push(object);
      });

      res.render('index', {jsonObj: jsonObjDisplay});
    }
    
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
          var dbCount = await db.collection('searches').count();
          searchTerm = searchTerm.replace(/%20/g, " ");
          console.log(searchTerm);
          var jsonObj = {_id: (dbCount + 1).toString(), "search_term": searchTerm, "time": (new Date()).toLocaleString()};
          const response = await db.collection('searches').insertOne(jsonObj);
          db.close();
        } catch (err) {
          debug(err.stack)
        }
        client.close();
      }());
  })
})

module.exports = imgSearchRouter;

