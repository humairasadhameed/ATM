import inquirer from "inquirer";
let myBalance = 88000;
console.log(myBalance);
let pincode = 85268;
let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin",
        type: "number",
    }
]);
if (pinanswer.pin === pincode) {
    console.log("Correct");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "What do you want to do",
            type: "list",
            choices: [
                "withdraw", "Fast cash", "check balance"
            ]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        myBalance -= amountAns.amount;
        console.log("Your remaining balance is : " + myBalance);
        if (myBalance >= amountAns.amount) {
            myBalance -= amountAns.amount;
            console.log(`your total balance is: ${myBalance}`);
        }
        else {
            console.log("insuffient balance");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your balance is : " + myBalance);
    }
    else {
        let fastAns = await inquirer.prompt([
            {
                name: "fastamount",
                message: "select your amount",
                type: "list",
                choices: ["1000", "2000", "5000", "10000"]
            }
        ]);
        myBalance -= fastAns.fastamount;
        console.log(`Your remaining balance is : ${myBalance}`);
    }
}
