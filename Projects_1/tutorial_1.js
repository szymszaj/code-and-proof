const prompt = require("prompt-sync")();
// prompt("What is your name? ");
const name = prompt("what is your name? ");
console.log("hello", name, "welcome to our game!");

const shouldWePlay = prompt("Do you want to play?");

if (shouldWePlay.toLowerCase() === "yes") {
  console.log("Great! Let's play.");
} else if (shouldWePlay.toLowerCase() === "no") {
  console.log("Okay, maybe next time!");
} else {
  console.log("invalid input....");
}
