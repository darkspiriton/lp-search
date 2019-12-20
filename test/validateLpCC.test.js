const validateLpService = require('../js/validateLpCC')

const urls = validateLpService.getUrls()
const text = validateLpService.getTextFind()
const html = validateLpService.getHTMLFind()

urls.forEach((url) => {
  test(`Compare Text Comunication Consent in ${url}`, async () => {
    let quotes = await validateLpService.getTextContent(url, text)
    quotes.forEach(quote => {
      expect(quote).toBe(text)
    })
  })

  test(`Compare Links Comunication Consent in ${url}`, async () => {
    let quotes = await validateLpService.getInnerHTML(url, text)
    quotes.forEach(quote => {
      expect(quote).toBe(html)
    })
  })
})
