require('dotenv').config()
let axios = require('axios')
let jsdom = require('jsdom')
let fs = require('fs')
let startsWith = require('lodash/startsWith')
let split = require('lodash/split')
let head = require('lodash/head')
let isNull = require('lodash/isNull')
const { JSDOM } = jsdom

const getUrls = () => {
  let text = fs.readFileSync(`./files/${process.env.FILE_URL_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes('!#'))
  return filter
}

const getIds = () => {
  let text = fs.readFileSync(`./files/${process.env.FILE_ID_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes('!#'))

  // let values = []
  // filter.forEach(item => {
  //   values[item] = process.env[item]
  // })

  return filter
}

const connectURL = async (url) => {
  try {
    let response = await axios.get(url)
    const dom = new JSDOM(response.data)
    return dom
  } catch (error) {

  }

}

const getKeys = async (dom, keys) => {
  let values = []
  keys.forEach(key => {
    partial = dom.window.document.getElementById(key)
    values[key] = findTextContent(partial)
  })
  return values
}

const findTextContent = (partial) => {
  if (isNull(partial)) return null
  let isChild = partial.textContent.startsWith('\n')
  return isChild ? partial.firstElementChild.textContent : partial.textContent
}

const getUrlDataUpdate = async (url, keys) => {
  let dom = await connectURL(url)
  let values = getKeys(dom, keys)
  return values
}

const getUrlData = async (url, key) => {
  let dom = await connectURL(url)
  partial = dom.window.document.getElementById(key)
  return findTextContent(partial)
}




module.exports = {
  getUrls,
  getIds,
  getUrlDataUpdate,
  getUrlData
}

