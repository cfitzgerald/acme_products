var products = [
  {
    id: 1,
    name: 'express',
    rating: 500,
    url: 'https://www.npmjs.com/package/express'
  }
];

module.exports = {
  getProducts: function() {
    return products;
  },
  getProduct: function(id) {
    return products.filter(function(product) {
      return product.id === id;
    })[0];
  },
  createProduct: function(product) {
    if (!product.name) {
      throw 'Product name is required!';
    }
    product.id = Math.round(1000 * Math.random());
    products.push(product);
  },
  deleteProduct: function(id) {
    products = products.filter(function(product) {
      return product.id !== id;
    });
  }
};
