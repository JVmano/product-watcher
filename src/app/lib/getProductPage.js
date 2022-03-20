const { execReq } = require('../services/execReq')

const getProductPage = async (productLink, headers) => {
  try {
    const response = await execReq(productLink, headers)
    if (response) return response
  } catch (error) {
    console.error(error)
    return ''
  }
}

module.exports = {
  getProductPage
}
