
const generateHTML = require('./src/generateHTML');


const Manage = require('./lib/Manage');
const Engine = require('./lib/Engine');
const Int = require('./lib/Int'); 

 
const fs = require('fs'); 
const inquirer = require('inquirer');


const teamArray = []; 


const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'Name the manager.', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Provide the manager's name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please submit the manager's ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Submit an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Submit an office number!')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(manageInput => {
        const  { name, id, email, officeNumber } = manageInput; 
        const manage = new Manage (name, id, email, officeNumber);

        teamArray.push(manage); 
        console.log(manage); 
    })
};

const addEmploy = () => {
    console.log(`
    =================
    Adding employees to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Select role for employ",
            choices: ['Engine', 'Int']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Employee needs a name!");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Employee needs an ID!")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employees email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('You need an email!')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Provide the employee's github user.",
            when: (input) => input.role === "Engine",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Provide the employee's github user!")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Submit the intern's school",
            when: (input) => input.role === "Int",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("You didn't provide the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmploy',
            message: 'Add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        

        let { name, id, email, role, github, school, confirmAddEmployee } = employData; 
        let employ; 

        if (role === "Engineer") {
            employ = new Engine (name, id, email, github);

            console.log(employ);

        } else if (role === "Intern") {
            employ = new Int (name, id, email, school);

            console.log(employ);
        }

        teamArray.push(employ); 

        if (confirmAddEmploy) {
            return addEmploy(teamArray); 
        } else {
            return teamArray;
        }
    })

};



const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
         
        if (err) {
            console.log(err);
            return;
        
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManage()
  .then(addEmploy)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
