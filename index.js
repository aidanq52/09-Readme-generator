//use the badge for lisence 

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

const questions = [
    {
        type: "input",
        message: "Enter a title:",
        name: "title"
    },

    {
        type: "input",
        message: "Give a description of this project:",
        name: "description"
    },

    {
        type: "input",
        message: "Enter installation information:",
        name: "installation"
    },

    {
        type: "input",
        message: "Enter usage information:",
        name: "usage"
    },

    {
        type: "input",
        message: "Enter license information:",
        name: "license"
    },

    {
        type: "input",
        message: "How many people contributed:",
        name: "contribute"
    },

    {
        type: "input",
        message: "Tests:",
        name: "tests"
    },

    {
        type: "input",
        message: "Link to your Github profile picture:",
        name: "profile"
    },
    {
        type: "input",
        message: "Enter your Github email:",
        name: "email"
    },
    
];

function writeToFile(fileName, data) {


    fs.writeFile( fileName, generateMarkdown(data), function ( error){
        if (error) console.log(error);
        else console.log( 'Success!');
    });

    // console.log( generateMarkdown( response ));


}

function init() {

    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile( 'README.md', response);
        })

}

init();
