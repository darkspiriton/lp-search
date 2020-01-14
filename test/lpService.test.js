const lpService = require('../js/lpService.js')
const urls = lpService.getTestUrl()
let data = lpService.getFileJson();
let type = lpService.getType()


urls.forEach((url) => {

  it(`${url} - test_disclaimer1`, async () => {
    let name = 'test_disclaimer1'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_disclaimerButtonText1`, async () => {
    let name = 'test_disclaimerButtonText1'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_buttonText1`, async () => {
    let name = 'test_buttonText1'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_disclaimer2`, async () => {
    let name = 'test_disclaimer2'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_disclaimerButtonText2`, async () => {
    let name = 'test_disclaimerButtonText2'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_buttonText2`, async () => {
    let name = 'test_buttonText2'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })

  it(`${url} - test_footerLegalText`, async () => {
    let name = 'test_footerLegalText'
    let typeName = `${type}_${name}`
    let value = data[url][name]
    expect(value).toEqual(process.env[typeName])
  })
})


