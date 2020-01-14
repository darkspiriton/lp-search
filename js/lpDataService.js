const SERVICE = require('./lpService.js')
let fs = require('fs')

async function searchAllUrls (urls, ids) {
  let data = {}
  console.log(`length: ${urls.length}`)
  for (let index = 0; index < urls.length; index++) {
    try {
      const url = urls[index];
      console.log(`${index + 1} connecting to ${url}`)
      console.time(`tiempo ${index + 1}`)
      let response = await SERVICE.getUrlData(url, ids)
      console.timeEnd(`tiempo ${index + 1}`)
      if (response !== null) {
        data[url] = response
      }
    } catch (error) {
      console.log(error)
    }
  }
  return data
}

async function getAllData (type) {
  console.time('tiempo-total')
  const urls = SERVICE.getUrls()
  const ids = SERVICE.getIds()
  try {
    let response = await searchAllUrls(urls, ids)
    let data = JSON.stringify(response)
    fs.writeFile('./test/files/data.txt', data, (err) => {
      if (err) console.log(err);
    })
    fs.writeFile('./test/files/type.txt', type, (err) => {
      if (err) console.log(err);
    })
    console.timeEnd('tiempo-total')
    return response
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllData
}
