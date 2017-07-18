var products = [
  {
    id: 1,
    name: 'Scan-it Security Checkpoint X-Ray Toy',
    rating: '78',
  },
  {
    id: 2,
    name: 'Tauntaun Sleeping Bag',
    rating: '99',
  },
  {
    id: 3,
    name: 'Food Chain Friends',
    rating: '61',
  },
  {
    id: 4,
    name: 'Mommy, Why is There a Server in the House?',
    rating: '6',
  },
  {
    id: 5,
    name: 'Thudguard Infant Safety Hat',
    rating: '24',
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
  // for finding max rating and max id; probably a cleaner way
  getMaxProperty: function(property) {
    return Math.max.apply(Math, products.map(function(product) {
      return product[property];
    }));
  },
  createProduct: function(product) {
    if (!product.name) {
      throw new Error('Product name is required!');
    } else if (!product.rating) {
      throw new Error('Product rating is required!');
    }
    if (product.rating > 100 || product.rating < 0) {
      throw new Error('Product rating must be between 0 and 100!');
    }
    var maxID = module.exports.getMaxProperty("id");
    product.id = maxID + 1;
    products.push(product);
  },
  deleteProduct: function(id) {
    products = products.filter(function(product) {
      return product.id !== id;
    });
  },
  topRatedProduct: function() {
    // return the product that matches the highest rating
    return products.filter(function(product) {
      return Number(product.rating) === Number(module.exports.getMaxProperty("rating")); // coerce string input to numbers
    })[0];
  }
};
