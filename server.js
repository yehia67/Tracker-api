var express = require('express'),
  app = express(),
  port = process.env.PORT || 5200,
  bodyParser = require('body-parser');
  

 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/trackerRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
console.log('tracker RESTful API server started on: ' + port);