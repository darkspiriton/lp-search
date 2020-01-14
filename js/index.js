const SERVICE = require('./lpDataService')
const LP_SERVICE = require('./lpService')
const inquirer = require('inquirer')

let dataResponse = () => {

  let menu = LP_SERVICE.getMenu()

  let questions = [{
    type: 'input',
    name: 'type',
    default: 'default',
    message: `Escriba tipo de test? ${menu.string}`,
  }]

  inquirer.prompt(questions).then(async (answers) => {
    let validMenu = menu.array.includes(answers['type'])
    if (validMenu) {
      await SERVICE.getAllData(answers['type'])
      console.log('------ FINISH ------')
    } else {
      console.log(`Opcion ${answers['type']} invalida`)
    }
  })
}

dataResponse()
