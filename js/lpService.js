require('dotenv').config()
let axios = require('axios')
let jsdom = require('jsdom')
let fs = require('fs')
let isNull = require('lodash/isNull')
let uniq = require('lodash/uniq')
let join = require('lodash/join')
let remove = '#'
const { JSDOM } = jsdom

const getUrls = () => {
  let text = fs.readFileSync(`./files/${process.env.ALL_URL_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes(remove))
  return uniq(filter)
}

const getMenu = () => {
  let text = fs.readFileSync(`./files/${process.env.MENU_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes(remove))
  return { 'string': join(uniq(filter), '|'), 'array': uniq(filter) }
}

const getTestUrl = () => {
  let text = fs.readFileSync(`./files/${process.env.COMPARE_URL_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes(remove))
  return uniq(filter)
}

const getIds = () => {
  let text = fs.readFileSync(`./files/${process.env.FILE_ID_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes(remove))
  return uniq(filter)
}

const getType = () => {
  let text = fs.readFileSync(`./test/files/${process.env.TYPE_NAME}`).toString('utf-8');
  return text.trim()
}

const getFileJson = () => {
  let text = fs.readFileSync(`./test/files/${process.env.FILE_DATA_NAME}`).toString('utf-8');
  return JSON.parse(text)
}


const saveLog = (data) => {
  let date = new Date()
  let save = `${date} - ${data}\n`
  fs.appendFile(`./test/files/log.txt`, save, function (err) {
    if (err) throw err;
    console.log('Saved! Log');
  });
}

const connectURL = async (url) => {
  try {
    let response = await axios.get(url)
    const dom = new JSDOM(response.data)
    return dom
  } catch (error) {
    saveLog(`error connection ${url}`)
    console.log(`error connection ${url}`)
    return null
  }
}

const getKeys = (dom, keys) => {
  let values = {}
  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    partial = dom.window.document.getElementById(key)
    values[key] = findTextContent(partial)
  }
  return values
}

const findTextContent = (partial) => {
  if (isNull(partial)) return null
  let isChild = partial.textContent.startsWith('\n')
  return isChild ? partial.firstElementChild.textContent : partial.textContent
}

const getUrlData = async (url, keys) => {
  try {
    let dom = await connectURL(url)
    return !isNull(dom) ? getKeys(dom, keys) : null
  } catch (error) {
    return null
  }
}

module.exports = {
  getUrls,
  getTestUrl,
  getIds,
  getUrlData,
  getFileJson,
  getMenu,
  getType
}

