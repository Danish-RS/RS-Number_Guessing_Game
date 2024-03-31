#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 8 + 1);
const guessNumber = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Kindly_Guess_a_Number_between 1 to 8: ",
  },
]);

if (guessNumber.userGuessedNumber === randomNumber) {
  console.log("Congrates...! You Guess Right Number. ");
} else {
  console.log("Sorry...! You Guessed Wrong Number");
}
