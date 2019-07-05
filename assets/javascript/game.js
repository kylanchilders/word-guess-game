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
document.getElementById("start_button").onclick = function() {
    game.stageGame();
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
    ],

    stageGame: function() {
        let randomPick = this.answers[Math.floor(Math.random()*this.answers.length)];
        this.answerSpace = [];
        this.rightGuesses = [];
        this.stringToArray(randomPick);
        this.attempts = 6;
        this.wrongGuesses = [];
        html_start_button.style = show;
        html_sub_header.style = show;
        html_right_guesses.textContent = game.arrayToString(game.rightGuesses);
        html_wrong_guesses.textContent =  game.arrayToString(game.wrongGuesses);
        this.runGame();
    },

// formatting text
arrayToString: function(arr) {
    //change array to string
    return arr = arr.join("");
},

stringToArray: function(str) {
    // store a string to an array
    game.answerSpace = str.toUpperCase().replace(" ", "_").split("");
    for (let i = 0 ; i < this.answerSpace.length ; i++) {
        game.rightGuesses.push("_");
    };
},

analyzeGuess: function(arr, val) {
    if (game.badGuess(val)) {
        // check validity of input against array of indices
        let analyzeIndices = [];
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] === val) {
                analyzeIndices.push(i);
            }
        };
        if (analyzeIndices.length !== 0) {
            game.correctGuess(analyzeIndices); 
        } else {
            game.incorrectGuess(val);
        }
    } else {
        html_bad_guess_alert.textContent = "Your entry is invalid m'lord";
        html_bad_guess_alert.style = show;
    }
},

correctGuess: function(indices) {
    if (game.alreadyCorrect(game.userInput)) {
        html_bad_guess_alert.textContent = "You've already guessed that one my leige";
        html_bad_guess_alert.style = show;
    } else {
        for (let i = 0 ; i < indices.length ; i++ ) {
            game.rightGuesses[indices[i]] = game.userInput;
        }
    }
},

incorrectGuess: function(val) {
    if (game.alreadyWrong(val)) {
        html_bad_guess_alert.textContent = "Incorrect good sir";
        html_bad_guess_alert.style = show;
    } else {
        game.wrongGuesses.push(val.toUpperCase());
        game.attempts --;
    }
},

badGuess: function(val) {
    // reject input unless its a letter
    if (val.length === 1 && val.match(/[a-z]/i)) {
        return true;
    } else {return false;}
},

alreadyCorrect: function(val) {
    return game.rightGuesses.includes(val);
},

alreadyWrong: function(val) {
    return game.wrongGuesses.includes(val);
},

gameOverState: function() {
    if (game.attempts == 0) {
        game.failState();
    } else if (game.answerSpace.join(",") == game.rightGuesses.join(",")) {
        game.successState();
    }
},

failState: function() {
    alert("You have failed m'lord");
    html_start_button.style = show;
},

successState: function() {
    alert("You have succeeded o great hero!");
    html_start_button.style = show;
},

//Running game here

runGame: function() {
    html_start_button.style = hide;
    html_sub_header.style = hide;
    document.onkeyup = function(event) {
        
        
        game.userInput = event.key.toUpperCase();
        
        // clear any output after player input
        html_bad_guess.style = hide;

        // calling function to analyze user input
        game.analyzeGuess(game.answerSpace, game.userInput);
    
        html_right_guesses.textContent = game.arrayToString(game.rightGuesses);
        html_wrong_guesses.textContent =  game.arrayToString(game.wrongGuesses);
        html_remaining_guesses.textContent = game.remaining_guesses;
        
        game.gameOverState();
        
    }
},
};