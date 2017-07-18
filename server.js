const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const override = require('method-override');
const path = require('path');
const pug = require('pug');
const routes = require('./routes'); // require modules from the 'routes' dir

const app = express();
const port = process.env.PORT || 3000; // heroku will assign a port, OR 3000

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(override('_method')); // use the _method parameter on the url
app.use(express.static('public')); // use the express.static middleware to get express to serve all the static files in the dir /public in the project root
app.use('/vendor', express.static(path.join(__dirname, 'node_modules'))); // __dirname is the absolute path
app.use(morgan('dev'));

app.use('/', routes);

// view engine setup
app.set('views', './views'); // set the 'views' val to specify the dir where the templates will be stored
app.set('view engine', 'pug'); // set the 'view engine' val to specify the template library (pug)

app.use(function(err, req, res, next){
  res.render('error', { error: err });
});

// listen on port (3000)
app.listen(port, function() {
  console.log(`acme_products app listening on port ${port}`);
});
