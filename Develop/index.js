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

    // // {
    // //     type: "input",
    // //     message: "Enter a title:",
    // //     name: "title"
    // // },
    // // {
    // //     type: "input",
    // //     message: "Enter a title:",
    // //     name: "title"
    // // },
    // // {
    // //     type: "input",
    // //     message: "Enter a title:",
    // //     name: "title"
    // // },
    // // {
    // //     type: "input",
    // //     message: "Enter a title:",
    // //     name: "title"
    // // },

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
            writeToFile( 'READMEgENERATED.md', response);
        })

}

init();
