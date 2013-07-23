var express = require('express');
var fs = require('fs');
var path = require('path');

var app = express.createServer(express.logger());

app.configure(function(){
  app.use(app.router);
  app.use('/image', express.static(path.join(__dirname, 'image')));
});

app.get('/', function(request, response) {
  var data;
  data = fs.readFileSync('index.html');
  response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
