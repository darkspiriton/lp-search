require('dotenv').config()
let axios = require('axios')
let jsdom = require('jsdom')
let fs = require('fs')
let startsWith = require('lodash/startsWith')
let split = require('lodash/split')
let head = require('lodash/head')
const { JSDOM } = jsdom

const getUrls = () => {
  let text = fs.readFileSync(`./files/${process.env.FILE_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes('!#'))
  return filter
}

const getTextFind = () => {
  return process.env.TEXT_FIND
}

const getHTMLFind = () => {
  return process.env.HTML_FIND
}


const getUrlData = async (url, text) => {
  let response = await axios.get(url)
  const dom = new JSDOM(response.data)
  let textInitial = head(split(text, ' ', 1))
  let quotes = dom.window.document.querySelectorAll("p")
  let filterQuotes = []
  quotes.forEach(quote => {
    let classNameParent = quote.parentElement.className
    let valid = classNameParent.includes('text')
    if (valid) {
      let validText = startsWith(quote.textContent, textInitial)
      if (validText) {
        filterQuotes.push(quote)
      }
    }
  })
  return filterQuotes
}

const getTextContent = async (url, text) => {
  let data = await getUrlData(url, text)
  let texts = []
  data.forEach(item => texts.push(item.textContent))
  return texts
}

const getInnerHTML = async (url, text) => {
  let data = await getUrlData(url, text)
  let texts = []
  data.forEach(item => texts.push(item.innerHTML))
  return texts
}

const findDiff = (str1, str2) => {
  let diff = "";
  str2.split('').forEach(function (val, i) {
    if (val != str1.charAt(i))
      diff += val;
  });
  return diff;
}


module.exports = {
  getUrls,
  getTextFind,
  getHTMLFind,
  getTextContent,
  getInnerHTML
}

