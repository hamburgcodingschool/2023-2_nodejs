/*
Exercise: Write a basic node program, that takes a name and greets you on the commandline
*/
let readlineSync = require("readline-sync")

let name = readlineSync.question("What's your name? ")
console.log("Hello, "+ name +", nice to meet you!")