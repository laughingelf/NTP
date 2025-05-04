const axios = require('axios')
require('dotenv').config()

const WooCommerceSite = 'https://northtexasprint.com'

exports.handler = async function (event) {
  const { id } = event.queryStringParameters

  if (!id) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing product ID' }),
    }
  }

  console.log('getting id', id)

  try {
    const response = await axios.get(`${WooCommerceSite}/wp-json/wc/v3/products/${id}`, {
      auth: {
        username: process.env.CONSUMER_KEY,
        password: process.env.CONSUMER_SECRET,
      },
    })

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    }
  } catch (error) {
    console.error('Error fetching product by ID:', error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error fetching product' }),
    }
  }
}
