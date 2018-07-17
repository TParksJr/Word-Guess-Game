$(function () {

    //declaring variables
    var wins = 0,
        losses = 0,
        remaining = 12,
        guessed = [],
        correctGuesses = [],
        word = "",
        letters = [],
        options = ["lion", "tiger", "cheetah", "bear", "camel", "horse", "eagle", "hawk", "falcon", "moose", "elk", "iguana"],
        userGuess = "",
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    /*//setting initial stats
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("remaining").innerHTML = remaining;
    document.getElementById("guessed").innerHTML = guessed;
    
    //choosing a random word
    word = options[Math.floor(Math.random() * options.length)];
    console.log("the word is " + word);
    
    //getting an array of the letters that make up the word
    var letters = Array.from(word);
    console.log("letters are " + letters);
    
    //show the number of letters in the word and auto assign ids
    for (i = 0; i < word.length; i++) {
        //document.getElementById("word").innerHTML += `<span class="letters${i}">_, </span>`;
        document.getElementById("word").innerHTML += "<span class=" + letters[i] + ">_ </span>";
    };*/

    //reset function
    function reset() {
        remaining = 12;
        guessed = [];
        correctGuesses = [];
        $("#wins").text(wins);
        $("#losses").innerHTML = losses;
        $("#remaining").text(remaining);;
        $("#guessed").text(guessed);
        word = options[Math.floor(Math.random() * options.length)];
        console.log("the word is " + word);
        letters = Array.from(word);
        console.log("letters are " + letters);
        document.getElementById("word").innerHTML = "";
        for (i = 0; i < word.length; i++) {
            $("#word").append("<span class='" + letters[i] + "'>_ </span>");
        };
    };

    reset();

    //adding event listener
    $(document).on("keypress", function (event) {
        userGuess = event.key.toLowerCase();
        console.log("userGuess is " + userGuess);

        if (alphabet.includes(userGuess)) {
            if (guessed.includes(userGuess)) {
                alert("You already guessed " + userGuess + "!");
            }
            else if (letters.includes(userGuess)) {
                if (correctGuesses.includes(userGuess)) {
                    alert("You already guessed " + userGuess + "!");
                }
                else {
                    correctGuesses.push(userGuess);

                    //this needs to be fixed, need to be able to select multiple elements
                    $("." + userGuess).html(userGuess + " ");
                    console.log(correctGuesses);
                    console.log(letters);
                };
            }
            else {
                remaining--;
                document.getElementById("remaining").innerHTML = remaining;
                guessed.push(userGuess);
                document.getElementById("guessed").innerHTML = guessed;
            };
        }
        else {
            alert(userGuess + " is not a letter!")
        };

        if (remaining === 0) {
            losses++;
            $("#losses").html(losses);
            alert("You lost!");
            reset();
        };
        if (correctGuesses.length === letters.length) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            alert("You won!");
            reset();
        };
    });
});