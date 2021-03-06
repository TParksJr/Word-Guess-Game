$(function () {

    //declaring variables
    var wins = 0,
        losses = 0,
        remaining = 12,
        state = 0,
        guessed = [],
        correctGuesses = [],
        word = "",
        letters = [],
        options = ["lion", "tiger", "cheetah", "bear", "camel", "horse", "eagle", "hawk", "falcon", "moose", "elk", "iguana"],
        userGuess = "",
        alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    //reset function
    function reset() {
        remaining = 7;
        guessed = [];
        correctGuesses = [];
        $("#wins").text(wins);
        $("#losses").innerHTML = losses;
        $("#remaining").text(remaining);;
        $("#guessed").text(guessed);
        word = options[Math.floor(Math.random() * options.length)];
        letters = Array.from(word);
        document.getElementById("word").innerHTML = "";
        for (i = 0; i < word.length; i++) {
            $("#word").append("<span class='" + letters[i] + "'>_ </span>");
        };
        state = 0;
        $("#hangman").attr("src", "assets/images/state0.png")
    };

    reset();

    //adding event listener
    $(document).on("keypress", function (event) {
        userGuess = event.key.toLowerCase();

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

                    $("." + userGuess).html(userGuess + " ");
                };
            }
            else {
                remaining--;
                document.getElementById("remaining").innerHTML = remaining;
                guessed.push(userGuess);
                document.getElementById("guessed").innerHTML = guessed;
                state++;
                if (state == 1) {
                    $("#hangman").attr("src", "assets/images/state1.png")
                } else if (state == 2) {
                    $("#hangman").attr("src", "assets/images/state2.png")
                } else if (state == 3) {
                    $("#hangman").attr("src", "assets/images/state3.png")
                } else if (state == 4) {
                    $("#hangman").attr("src", "assets/images/state4.png")
                } else if (state == 5) {
                    $("#hangman").attr("src", "assets/images/state5.png")
                } else if (state == 6) {
                    $("#hangman").attr("src", "assets/images/state6.png")
                } else if (state == 7) {
                    $("#hangman").attr("src", "assets/images/state7.png")
                }
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