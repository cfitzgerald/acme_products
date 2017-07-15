// GET /
// GET /products
// GET /products/:id
// DELETE /products/:id
// POST /products
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function(req, res) {
  res.render('index', {title: 'acme_products', message: 'Hello there!'});
});

// module.exports = {
//   router: router
// };
