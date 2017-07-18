const db = require('../db');
const express = require('express');
const router = express.Router();

module.exports = router;

router.get('/', function(req, res, next) {
  res.render('index',
  {
    tab: 'Acme Products',
    title: 'Acme Products',
    count: db.getProducts().length,
    topRated: db.topRatedProduct()
  });
});

router.get('/products', function(req, res, next) {
  res.render('products',
  {
    tab: 'Acme Products',
    title: 'Products',
    products: db.getProducts(),
    topRated: db.topRatedProduct()
  });
});

router.post('/products', function(req, res, next) {
  // console.log('SAVE params = ', req.body);
  db.createProduct(req.body);
  console.log(db.getProducts());
  res.redirect('/products');
});

router.get('/products/:id', function(req, res, next) {
  const id = Number(req.params.id);
  res.render('product',
  {
    tab: 'Acme Products',
    product: db.getProduct(id)
  });
});

router.delete('/products/:id', function(req, res, next) {
  // console.log('DELETE params = ', req.body);
  const id = Number(req.params.id);
  db.deleteProduct(id);
  res.redirect('/products');
});
