#! /usr/bin/env node
import inquirer from "inquirer";
const random = Math.floor(Math.random()*10+1);
const a = await inquirer.prompt([{
    message:"enter your guess number here : ",
    type : "number",
    name:"guessNumber"
}
])
if(a.guessNumber === random){
    console.log("congrats! you guess a right number.")
}
else {
    console.log("you guess a wrong number, please try again.")
}