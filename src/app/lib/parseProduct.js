const { parse } = require('node-html-parser')

const parseProduct = async (response) => {
  try {
    const root = parse(response)
    const img = root.querySelector('#deskImgProd')._attrs.src
    const name = root.querySelector('.topoDetalhe-boxRight-nome').childNodes[0]
      ._rawText
    const stockStatus =
      root.querySelector('.btIndisponivel')?.childNodes[0]?._rawText
    const availability = !stockStatus

    const product = {
      name: name,
      image: img,
      availability: availability
    }

    return product
  } catch (error) {
    console.error('Erro ao tratar informações do produto => ', error, '\n')
    return ''
  }
}

module.exports = {
  parseProduct
}
