var wordsArray = [
    "sword", "shield", "mace", "flail", "morning star", "armor", "dragon", "troll", "ogre", "wyvern", "hydra", "wizard", "quest", "adventure", "knight", "prince", "princess", "queen", "king", "orcs", "giant", "goblin", "elves", "warg", "curse", "spell", "sorcerer", "sorceress", "hero", "battle", "seige", "rogue", "druid", "warrior", "barbarian", "shaman", "mage", "druid", "warhammer", "archer", "bow and arrow", "crossbow", "spear", "bard", "warlock", "sellsword", "castle", "dungeon"
];

var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];

var answerLettersArray = [];
for (var i = 0; i < chosenWord.length; i++) {
    answerLettersArray[i] = "_";
}

var remainingLetters = chosenWord.length;

var showEmptyWord = document.getElementById("empty-guess");

while (remainingLetters > 0) {
    alert(answerLettersArray.join(" "));

    var letterGuess = prompt("Guess a letter with your keyboard");
    
    for (var j = 0; j < chosenWord.length; j++) {
        if (chosenWord[j] === letterGuess)  {
            answerLettersArray[j] = letterGuess;
            remainingLetters--;
        }
    }
}

alert(answerLettersArray.join(" "));
alert("Good job! The answer was " + chosenWord);
