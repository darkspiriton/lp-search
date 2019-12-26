const validateLpService = require('../js/validateLpCC')
const urls = validateLpService.getUrls()


urls.forEach((url) => {


  it(`${url} - test_footerLegalText`, async () => {
    value = await validateLpService.getUrlData(url, 'test_footerLegalText')
    expect(value).toEqual(process.env.test_footerLegalText)
  })

  it(`${url} - test_disclaimerButtonText1`, async () => {
    value = await validateLpService.getUrlData(url, 'test_disclaimerButtonText1')
    expect(value).toEqual(process.env.test_disclaimerButtonText1)
  })

  it(`${url} - test_buttonText1`, async () => {
    value = await validateLpService.getUrlData(url, 'test_buttonText1')
    expect(value).toEqual(process.env.test_buttonText1)
  })

  it(`${url} - test_disclaimer2`, async () => {
    value = await validateLpService.getUrlData(url, 'test_disclaimer2')
    expect(value).toEqual(process.env.test_disclaimer2)
  })

  it(`${url} - test_disclaimerButtonText2`, async () => {
    value = await validateLpService.getUrlData(url, 'test_disclaimerButtonText2')
    expect(value).toEqual(process.env.test_disclaimerButtonText2)
  })

  it(`${url} - test_buttonText2`, async () => {
    value = await validateLpService.getUrlData(url, 'test_buttonText2')
    expect(value).toEqual(process.env.test_buttonText2)
  })

  it(`${url} - test_footerLegalText`, async () => {
    value = await validateLpService.getUrlData(url, 'test_footerLegalText')
    expect(value).toEqual(process.env.test_footerLegalText)
  })

})


