const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
   .prompt([
    {
        name: 'name',
        message: 'Text your name: ',
    },
    {
        name: 'age',
        message: 'Text your age: ',
    }
   ]).then((answers) => {

    console.log(chalk.black.bgYellowBright(`Hi ${answers.name}, your age is ${answers.age}!`))

   }).catch(err => console.log(err))