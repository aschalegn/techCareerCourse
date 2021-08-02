var userInput, chossenNumber = 3, guessCounter = 0;




while (guessCounter < 3) {
    userInput = Number(prompt("guess the number"));
    guessCounter++;
    if (userInput == chossenNumber) {
        alert("woooow");
        break;
    }
    else {

    }
}


















//! using while loop
// while (guessCounter < 3) {
//     userInput = Number(prompt("guess the number"));
//     guessCounter++;
//     if (userInput == chossenNumber) {
//         alert("well done you did it in " + guessCounter);
//         break;
//     }
// }

//! using if else
// userInput = Number(prompt("guess the number"));
// guessCounter++;
// if (userInput == chossenNumber ) {
//     console.log("well done");
// } else {
//     userInput = Number(prompt("guess the number"));
//     guessCounter++;
//     if (userInput == chossenNumber ) {
//         console.log("well done");
//     }
//     else {
//         userInput = Number(prompt("guess the number"));
//         guessCounter++;
//         if (userInput == chossenNumber ) {
//             console.log("well done");
//         } else {
//             console.log("sorry not the number");
//         }
//     }
// }




