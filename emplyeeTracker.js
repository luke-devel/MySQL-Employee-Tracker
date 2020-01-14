var mysql = require("mysql");
var inquirer = require("inquirer");

const Employee = require("./Employee");


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "1440",
    database: "employee_trackerDB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

// function which prompts the user for what action they should take
function start() {
    inquirer
        .prompt({
            name: "selecitonPrompt",
            type: "list",
            message: "Make a choice below.",
            choices: ["View All Employees", "Add a New Employee", "EXIT"]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.selecitonPrompt === "View All Employees") {
                viewEmployees();
            }
            else if (answer.selecitonPrompt === "Add a New Employee") {
                //bidAuction();
            } else {
                connection.end();
            }
        });
}

// Function to view all employees
function viewEmployees() {
    console.log("Selecting all Employees...\n");
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
        start();
    });
}

function addNewEmployee() {
    // prompt for info about the item being put up for auction
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "What is the employee's first name?"
            },
            {
                name: "last_name",
                type: "input",
                message: "What is the employee's last name?"
            },
            {
                name: "role",
                type: "input",
                message: "What is the employee's role?",
            },
            {
                name: "manager",
                type: "input",
                message: "Who is the employee's manager?",
            }
        ])
        .then(function (answer) {
            // when finished prompting, call constructor of employee class to add employee
            connection.query(
                "INSERT INTO auctions SET ?",
                {
                    item_name: answer.item,
                    category: answer.category,
                    starting_bid: answer.startingBid || 0,
                    highest_bid: answer.startingBid || 0
                },
                function (err) {
                    if (err) throw err;
                    console.log("Your auction was created successfully!");
                    // re-prompt the user for if they want to bid or post
                    start();
                }
            );
        });
}
