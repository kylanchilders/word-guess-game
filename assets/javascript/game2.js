// VARIABLES // ==========================================================================

//Array of words to guess

var wordsArray = [
    "sword", "shield", "mace", "flail", "morning star", "armor", "dragon", "troll", "ogre", "wyvern", "hydra", "wizard", "quest", "adventure", "knight", "prince", "princess", "queen", "king", "orcs", "giant", "goblin", "elves", "warg", "curse", "spell", "sorcerer", "sorceress", "hero", "battle", "seige", "rogue", "druid", "warrior", "barbarian", "shaman", "mage", "druid", "warhammer", "archer", "bow and arrow", "crossbow", "spear", "bard", "warlock", "sellsword", "castle", "dungeon"
];

//variable to count wrong guesses
var Strike = 0;

// FUNCTIONS // ===========================================================================

//Function to generate word to guess and list blanks on screen
function generateWord() {
    var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var answerLettersArray = [];
    for (var i = 0; i < chosenWord.length; i++) {
        answerLettersArray[i] = "_";
    }
    var remainingLetters = chosenWord.length;
    document.querySelector("#unknown-word").innerHTML = answerLettersArray.join(" ");
}

//Function to update strikes
function updateStrike() {
    document.querySelector("#strike").innerHTML = "Strikes: " + Strike;
}

// MAIN PROCESS // ==============================================================================

//Calling functions to start the game

generateWord();
updateStrike();

document.onkeyup = function(event)  {
    var userGuess = event.key.toLowerCase();

    for (var j = 0; j < chosenWord.length; j++) {
        if (chosenWord[j] === userGuess)  {
            answerLettersArray[j] = userGuess;
            remainingLetters--;

};