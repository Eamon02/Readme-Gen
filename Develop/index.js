// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
async function promptUser() {
    try {
        let data = await inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your Full Name:'
            },
            {
                type: 'input',
                name: 'year',
                message: 'Current Year:'
            },
            {
                type: 'input',
                name: 'username',
                message: 'Your Github Username:'
            },
            {
                type: 'input',
                name: 'repo',
                message: 'Repository Name:',
            },
            {
                type: 'input',
                name: 'title',
                message: 'Project Title:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Choose License',
                choices: ['None', `Unlicensed`, 'MIT', 'Apache', 'GNU GPLv3']
            },
            {
                type: 'editor',
                name: 'description',
                message: 'Repository Description:'
            },
            {
                type: 'editor',
                name: 'usage',
                message: 'Usage Details:'
            },
            {
                type: 'input',
                name: 'credit',
                message: 'Name of Contributor:'
            },
            {
                type: 'editor',
                name: 'creditGit',
                message: 'Github of Contributor:'
            },
            {
                type: 'editor',
                name: 'install',
                message: 'What are the steps required to install your project:'
            },
            {
                type: 'input',
                name: 'demo',
                message: 'location or Link to Demo:'
            },
        ]);
        return data

    } catch (error) {
        throw error;
    }
};

// TODO: Create a function to write README file
const init = async () => {
    try {
        const data = await promptUser()
        console.log(data)
        await writeFileAsync('README.md', generateMarkdown(data))
        console.log(`${data.repo} created`)
    } catch (error) {
        throw error
    }
}

init()

