const axios = require('axios').default

const execReq = async (productUrl, headers) => {
  const options = {
    method: 'GET',
    url: productUrl,
    headers: headers
  }

  const response = await axios
    .request(options)
    .then(function (response) {
      const responseData = response.status !== 200 ? '' : response.data
      return responseData
    })
    .catch(function (error) {
      console.log('Erro ao executar requisição => ', error, '\n')
      return ''
    })
  return response
}

module.exports = {
  execReq
}
