const SERVICE = require('./validateLpCC')
let fs = require('fs')

async function searchAll (urls, ids) {
  let data = {}

  for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
    let response = await SERVICE.getUrlDataUpdate(url, ids)
    if (response !== null) {
      data[url] = response
    }
  }
  return data

}


async function getAllData () {
  console.time('tiempo')
  const urls = SERVICE.getUrls()
  const ids = SERVICE.getIds()
  let response = await searchAll(urls, ids)
  let data = JSON.stringify(response)
  fs.writeFile('./test/data.txt', data, (err) => {
    if (err) console.log(err);
  })
  console.timeEnd('tiempo')
  return response
}

module.exports = {
  getAllData
}
