#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 30000; // Rupees
let pinCode = 1122; // Always constant
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "please enter your pin:",
        type: "number",
    }
]);
console.log(pinAnswer.pin);
// Statement:(if/else/else_if);
if (pinAnswer.pin === pinCode) {
    console.log("Wellcome to Your Account !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number",
            }
        ]);
        // =, -=, += : assigment operators.
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Your Current Balance is: " + myBalance);
        }
        else if (amountAns.amount > myBalance) {
            console.log(`Unable to Process this transaction Because Your Total Balance is : ${myBalance}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`Your Balance is: ${myBalance}`);
        // or: console.log("Your Balance is:" + " " + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let fastCash = await inquirer.prompt({
            name: "cashResult",
            message: "Choose amount between these options",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000"],
        });
        myBalance = myBalance - fastCash.cashResult;
        console.log("Your Balance is:" + " " + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code Please Try Again!!!");
}
