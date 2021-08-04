// var combinedTypeArray = [1, "text", "another", 10];
// var arrayOfString = ["hello", "world", "moshe"];

// 6.
// var midlleIndex = arrayOfNums.length / 2 - 0.5 //2
// console.log(arrayOfNums[midlleIndex]);

// for (var index = 1; index <= 10; index++) {
//     console.log(i);
// }

// var arrayOfNums = [1, 50, 7, 10, 5];
// arrayOfNums.push(40); //! [1, 50, 7, 10, 5, 40]
// arrayOfNums.push(40.89);

// // 
// for (var index = 0; index < arrayOfNums.length; index++) {
//     console.log(arrayOfNums[index]);
// }

var userInput, counter = 0, arrayOfNums = [], sum = 0;

// push the numbers
while (counter < 5) {
    userInput = Number(prompt("insert number"));
    arrayOfNums.push(userInput);
    counter++;
}

// calculate the sum
for (var index = 0; index < arrayOfNums.length; index++) {
    console.log(arrayOfNums[index]);
    sum = sum + arrayOfNums[index];
}

console.log(sum);





// console.log(arrayOfNums[0]);
// console.log(arrayOfNums[1]);
// console.log(arrayOfNums[2]);