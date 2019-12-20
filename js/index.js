const validateLpService = require('./validateLpCC')
const text = validateLpService.getTextFind()

let dataResponse = async () => {
  let data = await validateLpService.getInnerHTML('https://www.freewayinsurance.com/lp/NT082-FWYCA-A-GO-LP-E-02502/', text)
  data.forEach(item => console.log(item))
}
dataResponse()

// console.log(validateLpService.getUrls(text))
