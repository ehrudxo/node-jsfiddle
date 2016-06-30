var express = require('express');
var app = express();
var JSFiddleApi = require ("../index");
//static setting -> react isomorphic
//go to the   great world

app.use('/',express.static(__dirname + '/../public'));
app.get('/:id/:uuid', function(req, res){
  JSFiddleApi.getFiddle(req.params.id+"/"+req.params.uuid+"/", function (err, fiddleObj) {
    if (err) { return console.log (err); }
    console.log(JSON.stringify(fiddleObj));
      res.send(JSON.stringify(fiddleObj));
  });

});
app.listen(3000);
