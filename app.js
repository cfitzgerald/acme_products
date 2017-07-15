const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const override = require('method-override');
const pug = require('pug');
const routes = require('./routes'); // require modules from the 'routes' dir

const app = express();
const port = process.env.PORT || 3000; // heroku will assign a port, OR 3000

app.use(express.static('public')); // use the express.static middleware to get express to serve all the static files in the dir /public in the project root
// app.use(morgan);
app.use('/', routes);

// // middleware handler methods for errors and HTTP 404 responses
// app.use(function(req, res, next) {
//   const err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(req, res, next) {
//   //set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// view engine setup
app.set('views', './views'); // set the 'views' val to specify the dir where the templates will be stored
app.set('view engine', 'pug'); // set the 'view engine' val to specify the template library (pug)

// listen on port (3000)
app.listen(port, function() {
  console.log(`acme_products app listening on port ${port}`);
});
