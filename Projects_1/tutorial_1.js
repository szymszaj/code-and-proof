const prompt = require("prompt-sync")();
// prompt("What is your name? ");
const name = prompt("what is your name? ");
console.log("hello", name, "welcome to our game!");

const shouldWePlay = prompt("Do you want to play?");

const condition =
  shouldWePlay.toLowerCase() === "yes" || shouldWePlay.toLowerCase() === "y";

if (condition) {
  console.log("Great! Let's play.");
} else {
  console.log("Maybe next time!");
}
