const axios = require('axios');

// WooCommerce API credentials
const consumerKey = 'ck_d97041242cbb0700e1573ae6f6ca2405899f16b5';  
const consumerSecret = 'cs_ec41916740ab65c6c1897ddff6e53053da988852';
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

    // Return error response if the request fails
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching products' }),
    };
  }
};
