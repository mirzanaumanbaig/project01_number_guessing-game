import inquirer from "inquirer";
let round;
do {
    const num = Math.round(Math.random() * 10);
    const ans = await inquirer.prompt([
        {
            type: "number",
            name: "userInput",
            message: "Guess the Number (1-10): "
        }
    ]);
    console.log("Lucky Number is : " + num + " and your Guess is : " + ans.userInput);
    if (ans.userInput === num) {
        console.log("Congadulation You Guessed the right number.");
    }
    else {
        console.log("Try again next time.");
    }
    round = await inquirer.prompt([
        {
            type: "string",
            name: "roundInput",
            message: "Do you want to play and other round (Y/N): "
        }
    ]);
} while (round.roundInput === "Y");
