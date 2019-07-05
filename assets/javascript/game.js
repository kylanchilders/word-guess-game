var html_right_guesses = document.getElementById("right_guesses");
var html_wrong_guesses = document.getElementById("wrong_guesses");
var html_bad_guess = document.getElementById("bad_guess");
var html_remaining_guesses = document.getElementById("remaining_guesses");
var html_start_button = document.getElementById("start_button");
var html_sub_header = document.getElementById("sub_header");
var show = "visibility: visible;";
var hide = "visibility: hidden;";
var userInput;

// Start game button
document.getElementById("game_start").onclick = function() {
    game.setGame();
}

var game = {
    // to write to html
    rightGuesses: [], // to write correct guesses to DOM
    wrongGuesses: [], // to write incorrect guesses to DOM
    
    // in game variables
    userInput: "", // placeholder for user input
    attempts: 6, // number of guesses at start of game
    answerSpace: [], // where the array of the selected word is stored

    answers: [
        "sword", "shield", "mace", "flail", "morning star", "armor", "dragon", "troll", "ogre", "wyvern", "hydra", "wizard", "quest", "adventure", "knight", "prince", "princess", "queen", "king", "orcs", "giant", "goblin", "elves", "warg", "curse", "spell", "sorcerer", "sorceress", "hero", "battle", "seige", "rogue", "druid", "warrior", "barbarian", "shaman", "mage", "druid", "warhammer", "archer", "bow and arrow", "crossbow", "spear", "bard", "warlock", "sellsword", "castle", "dungeon"
    ]
    
}
