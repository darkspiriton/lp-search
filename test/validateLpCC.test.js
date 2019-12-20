const validateLpService = require('../js/validateLpCC')

const urls = validateLpService.getUrls()
const text = validateLpService.getTextFind()

urls.forEach((url) => {
  test(`Compare Comunication Consent in ${url}`, async () => {
    let quote = await validateLpService.getUrlData(url)
    expect(quote).toEqual(text)
  })
})
