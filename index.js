const { getProducts } = require('./src/app/getProducts')
const { sleep } = require('./src/app/util/sleep')

;(async () => {
  while (true) {
    await Promise.all([
      await getProducts(
        'https://www.gsuplementos.com.br/creatina-250g-creapure-growth-supplements-p985824'
      )
      // await getProducts('https://www.gsuplementos.com.br/whey-protein-concentrado-1kg-growth-supplements-p985936') // tem estoque
    ])
    await sleep(15000)
  }
})()
