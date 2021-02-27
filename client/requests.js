const axios = require('axios');

const server = 'http://localhost:3000';

// Requests go here

// PRODUCTS REQUESTS

// RELATED PRODUCTS REQUESTS
const getRelatedProducts = (productId, callback) => {
  axios.get(`${server}/products/${productId}/related`)
    .then((data) => {
      callback(null, data);
    })
    .catch((err) => {
      callback(err, null);
    })
}

// REVIEWS REQUESTS

// QUESTIONS AND ANSWERS REQUESTS

// CART REQUESTS

// INTERACTIONS REQUESTS

export {
  getRelatedProducts
};