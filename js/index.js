const validateLpService = require('./validateLpCC')
let ids = validateLpService.getIds()
console.log(ids)

let dataResponse = async () => {
  let keys = ids
  let data = await validateLpService.getUrlDataUpdate('https://www.freewayinsurance.com/lp/NT082-FWYCA-A-GO-LP-E-02502/', keys)
  console.log(data)
  // data.forEach(item => console.log(item))
}
dataResponse()
