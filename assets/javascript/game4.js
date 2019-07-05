document.addEventListener("DOMContentLoaded", function(){
    
var wordsArray = [
    "sword", "shield", "mace", "flail", "morning star", "armor", "dragon", "troll", "ogre", "wyvern", "hydra", "wizard", "quest", "adventure", "knight", "prince", "princess", "queen", "king", "orcs", "giant", "goblin", "elves", "warg", "curse", "spell", "sorcerer", "sorceress", "hero", "battle", "seige", "rogue", "druid", "warrior", "barbarian", "shaman", "mage", "druid", "warhammer", "archer", "bow and arrow", "crossbow", "spear", "bard", "warlock", "sellsword", "castle", "dungeon"
];



function generateWord() {
    var chosenWord = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    var answerLettersArray = [];
    for (var i = 0; i < chosenWord.length; i++) {
        answerLettersArray[i] = "_";
    }
    document.querySelector("#unknown-word").innerHTML = answerLettersArray.join(" ");

  
}

generateWord();

var remainingLetters = chosenWord.length;

while (remainingLetters > 0) {

    document.querySelector("#unknown-word").innerHTML = answerLettersArray.join(" ");
    

    document.onkeyup = function(event)  {
        var letterGuess = event.key.toLowerCase();
    
        for (var j = 0; j < chosenWord.length; j++) {
            if (chosenWord[j] === letterGuess)  {
                answerLettersArray[j] = letterGuess;
                remainingLetters--;
            }
        }
    }    
}   

alert(answerLettersArray.join(" "));
alert("Good job! The answer was " + chosenWord);

});
