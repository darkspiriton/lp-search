const SERVICE = require('./findUrls')
let dataResponse = async () => {
  let data = await SERVICE.getAllData()
  console.log(data)
}
dataResponse()
