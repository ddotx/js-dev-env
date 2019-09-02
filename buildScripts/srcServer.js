// var express = require('express');
// var path = require('path');
// var open = require('open');

// var port = 3000;
// var app = express();
/* eslint-disable no-console */
//ES6
import express from 'express';
import path from 'path';
import open from 'open';

const port = 3000;
const app = express();

//Integrate webpack with express-------
import webpack from 'webpack';
import config from '../webpack.config.dev';
const compiler = webpack(config);
app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
//-------------------------------------

//tell Express which routes it should handle: declare routing
app.get('/', function(req,res){
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//Demo: Fetch
app.get('/users', function(req,res){
  //Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id":1,"firstName":"Bob","lastName":"Smith","email":"bib@gmail.com"},
    { "id": 2, "firstName": "Tammy", "lastName": "Norton", "email": "tnorton@yahoo.com" },
    { "id": 3, "firstName": "Tina", "lastName": "Lee", "email": "lee.tina@hotmail.com" }
  ]);
});


//tell Express to listen on the port redefined above
app.listen(port, function(err){
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
