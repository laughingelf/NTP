const axios = require('axios');
require('dotenv').config();

// WooCommerce API credentials
const consumerKey = process.env.CONSUMER_KEY;  
const consumerSecret = process.env.CONSUMER_SECRET;
const WooCommerceSite = 'https://northtexasprint.com'; 

// Function to fetch products from WooCommerce API
exports.handler = async function(event, context) {
  const apiUrl = `${WooCommerceSite}/wp-json/wc/v3/products`;  // WooCommerce API endpoint for products

  try {
    // Making the request to WooCommerce API
    const response = await axios.get(apiUrl, {
      auth: {
        username: consumerKey,
        password: consumerSecret
      }
    });

    // Return the products as JSON
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),  // Returning the product data
    };
  } catch (error) {
    console.error('Error fetching products:', error.message);
    console.log(process.env.CONSUMER_SECRET)

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching products' }),
    };
  }
};
