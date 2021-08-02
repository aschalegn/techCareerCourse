var userInput, chossenNumber = 3, maxGuess = 3;

userInput = Number(prompt("guess the number"));

if (userInput) {
    if (userInput === chossenNumber && maxGuess) {
        console.log("well done");
    } else {
        maxGuess--;
        userInput = Number(prompt("guess the number"));
        if (userInput === chossenNumber) {
            console.log("well done");
        } else {

        }
    }

}