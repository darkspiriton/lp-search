require('dotenv').config()
let axios = require('axios')
let jsdom = require('jsdom')
let fs = require('fs')
const { JSDOM } = jsdom

const getUrls = () => {
  let text = fs.readFileSync(`./files/${process.env.FILE_NAME}`).toString('utf-8');
  let textByLine = text.split("\n")
  const filter = textByLine.filter(item => item !== '' && !item.includes('!#'))
  return filter
}

const getUrlData = async (url) => {
  let response = await axios.get(url)
  const dom = new JSDOM(response.data)
  // console.log(dom.window.document.querySelector("p").innerHTML)
  let quote = dom.window.document.querySelector("p").textContent
  // console.log()
  return quote
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
  getUrlData,
  findDiff,
  getUrls,
}

