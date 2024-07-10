#! /usr/bin/env node
// shebang for npm execution
import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 10000; // Initial balance in dollars
let myPin = 1025; // Predefined PIN code
const pinCode = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your PIN:",
    },
]);
if (pinCode.pin === myPin) {
    console.log("Correct PIN code");
    const operationAns = await inquirer.prompt({
        name: "operation",
        type: "list",
        message: "Please select an option:",
        choices: ["Withdraw", "Check Balance"],
    });
    if (operationAns.operation === "Withdraw") {
        const amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter the amount you want to withdraw:",
            type: "number",
        });
        if (amountAns.amount > myBalance) {
            console.log(chalk.bold.red("You have insufficient balance."));
        }
        else {
            myBalance -= amountAns.amount;
            console.log(chalk.blueBright("Your remaining balance is $" + myBalance));
        }
    }
    else if (operationAns.operation === "Check Balance") {
        console.log(chalk.blueBright("Your current balance is $" + myBalance));
    }
}
else {
    console.log(chalk.bold.green("Incorrect PIN number"));
}
