var minAge = 18;
var maxAge = 30;
var clientAge = 40;
var isDenied = true;

if (clientAge >= minAge && clientAge <= maxAge && !isDenied) {
    console.log("welcome");
}
else if (clientAge < minAge) {
    console.log("Go home you are minore");
}
else if (clientAge > maxAge) {
    console.log("Go home you are older");
}
else {
    console.log("you are bdenied");
}
