const { defaultGrowthHeaders } = require('./interface/getHeaders')
const { parseProduct } = require('./lib/parseProduct')
const { sendDiscordWebhook } = require('./lib/sendWebhook')
const { execReq } = require('./services/execReq')
const productsCache = []

const getProducts = async (productLink) => {
  const headers = defaultGrowthHeaders(productLink)
  const productPage = await execReq(productLink, headers)
  const product = await parseProduct(productPage)
  if (product.availability) {
    // * search if the product was already sent in discord channel
    const warningTrigger = productsCache.filter(
      (element) => element.name === product.name
    )
    if (!warningTrigger[0]) {
      productsCache.push(product)
      sendDiscordWebhook(product.name, product.image, productLink)
      // * after 20min the interval delete the old key in cache
      setInterval(function () {
        const index = productsCache.indexOf(product)
        if (index > -1) productsCache.splice(index, 1)
      }, 1200000)
    }
  }
}

module.exports = {
  getProducts
}
