const defaultGrowthHeaders = (productUrl) => {
  const headers = {
    authority: 'www.gsuplementos.com.br',
    'user-agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36',
    accept: '*/*',
    'sec-gpc': '1',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-mode': 'cors',
    'sec-fetch-dest': 'empty',
    referer: productUrl,
    'accept-language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
    dnt: '1'
  }
  return headers
}

module.exports = {
  defaultGrowthHeaders
}
