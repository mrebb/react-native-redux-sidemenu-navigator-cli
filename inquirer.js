const inquirer = require('inquirer');
const fs = require('fs');
var ProgressBar = require('progress');
var chalk = require('chalk');
const CHOICES = fs.readdirSync(`${__dirname}/templates`);
const QUESTIONS = [
  {
    name: 'project-choice',
    type: 'list',
    message: chalk.bold.blue('What project template would you like to generate?'),
    choices: CHOICES
  },
  {
    name: 'project-name',
    type: 'input',
    message: chalk.bold.yellow('Project name:'),
    validate: function (input) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) return true;
      else return chalk.bold.red('Project name may only include letters, numbers, underscores and hashes.');
    }
  }
];

const CURR_DIR = process.cwd();
function getUserCmd() {
  inquirer.prompt(QUESTIONS)
    .then(answers => {
      const projectChoice = answers['project-choice'];
      const projectName = answers['project-name'];
      const templatePath = `${__dirname}/templates/${projectChoice}`;

      fs.mkdirSync(`${CURR_DIR}/${projectName}`);
      createDirectoryContents(templatePath, projectName);
    });
}

function createDirectoryContents(templatePath, newProjectPath) {
  const filesToCreate = fs.readdirSync(templatePath);
  filesToCreate.forEach(file => {
    const origFilePath = `${templatePath}/${file}`;

    // get stats about the current file
    const stats = fs.statSync(origFilePath);
    if (stats.isFile()) {
      const contents = fs.readFileSync(origFilePath, 'utf8');
      const writePath = `${CURR_DIR}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8')
    }
    else if (stats.isDirectory()) {
      let barOpts = {
        complete: '='
        , incomplete: ' '
        , width: 40
        , total: 100
      };
    
      let bar = new ProgressBar('copying files [:bar] :percent :etas', barOpts);
      (function next() {
        bar.tick(1);
      
        if (!bar.complete) {
          setTimeout(next, 10);
        }
      })();
      fs.mkdirSync(`${CURR_DIR}/${newProjectPath}/${file}`);

      // recursive call
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  });
}

module.exports.run = getUserCmd();