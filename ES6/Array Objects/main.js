// //! sort names
// var names = ["david", "dan", "someone-odd", "asche"];
// console.log(names.toString());
// console.log(names.join(" #"));



// console.log(names.sort());

// names.sort().reverse();

// console.log(names.join(""));


// names.push("bob")
// // console.log(names.join(" "));

// //! sort numbers
// var numbers = [30, 1, 13, 40, 2, 7, 51, 23];
// console.log(numbers.toString());

// // var arr1 = [13, 40, 2];

// console.log(numbers.sort(compare));
// // console.log(arr1.sort(compare));

// function compare(a, b) {
//     var result = a - b;
//     return result;
//     //30 - 1 = 29
//     // result > 0   //! a > b -> a moves to the right
//     // result = 0  //! a = b -. do nothing
//     // result < 0   //! a < b -> do nothing
// }


// // //! sort objects by price
// const products = [
//     { title: "NIke Shoes", price: 300 },
//     { title: "socks", price: 30 },
//     { title: "t-shirt", price: 200 },
// ]

// console.log(products.sort(compareObject));

// function compareObject(a, b) {
//     return a.price - b.price;
// }

// var obj = [
//     { name: "shirts", price: 40 },
//     { name: "dress", price: 10 },
//     { name: "dress", price: 5 },
//     { name: "dress", price: 91 },
//     { name: "dress", price: 564 },
// ];

// function to_big(a, b) {
//     return a.price - b.price;
// }

// var result1 = obj.sort(to_big);
// console.log(result1[0].price);

// function to_small(a, b) {
//     return b.price - a.price;
// }

// var result2 = obj.sort(to_small);

// console.log(result2);



// var srtingArray = ["bob", "alen", "david", "cddd"];
// // array.sort();

// var names= ["משה", "תות", "אסצלין"]

// console.log(names.sort());

// var car = {
//     name: "kjfdn",
//     print: function () {
//         console.log(this); //!
//     }
// }

// var person = {
//     name: "uri",
//     job: "werfg",
//     print: function () {
//         console.log(this); //!
//     }
// }

// console.log(this);

// car.print();
// person.print();
// array.sort();


// var cars = [
//     {
//         model: "mazda",
//         yaer: 2020,
//         price: 132000,
//         // tests: ["aaa", "bbb"],
//         sale: 15
//     },
//     {
//         model: "hyundai",
//         yaer: 2020,
//         price: 95000,
//         // tests: ["aaa", "bbb"],
//         sale: 10
//     },
//     {
//         model: "toyota",
//         yaer: 2010,
//         price: 13000,
//         // tests: ["aaa", "bbb"],
//         sale: false
//     },
//     {
//         model: "bmw",
//         yaer: 2015,
//         price: 40000,
//         // tests: ["aaa", "bbb"],
//         sale: 7
//     },
//     {
//         model: "alpha",
//         yaer: 2020,
//         price: 52000,
//         // tests: ["aaa", "bbb"],
//         sale: false,
//     },
// ]

// const carsContainer = document.getElementById("carsContainer");
// const fromCheap = document.getElementById("fromCheap");
// const toCheap = document.getElementById("toCheap");

// fromCheap.onclick = () => { sortByPrice('fromCheap') };
// toCheap.onclick = () => { sortByPrice('toCheap') };

// function sortByPrice(type) {
//     carsContainer.innerHTML = "";
//     if (type == "fromCheap") {
//         cars.sort((a, b) => { return a.price - b.price });
//     }
//     if (type == "toCheap") {
//         cars.sort((a, b) => { return b.price - a.price });
//     }

//     for (let i = 0; i < cars.length; i++) {
//         carsContainer.innerHTML += `<article>
//         <h1>${cars[i].model}</h1
//         <span>${cars[i].price}</span>
//         </article>`
//     }
// }
// ${element}
// var element="";
//         for (let j = 0; j < cars[i].tests.length; j++) {
//             element += `<p>${cars[i].tests[j]}</p>`
//         }





// var a = 5;
// var result = a - 2;

// if (result == 1) {
//     console.log("equal to " + 1);
// }
// else if (result == 2) {
//     console.log("equal to " + 2);
// }
// else if (result == 3) {
//     console.log("equal to " + 3);
// }
// else if (result == 4) {
//     console.log("equal to " + 4);
// } else {
//     console.log("not found");
// }

// switch (result) {
//     case 1:
//         console.log("equal to" + 1);
//         break;
//     case result % 3 == 0:
//         console.log("equal to" + 1);
//         break;
//     case 2:
//         console.log("equal to" + 2);
//         break;
//     case 3:
//         console.log("equal to " + 3);
//         break;
//     case 4:
//         console.log("equal to " + 4);
//         break;
//     default:
//         console.log("not found");
//         break;
// }

// var num = 10;

// switch (true) {
//     case num % 2 == 0:
//         console.log(10);
//         break;
//     case num % 2 == 0:
//         console.log(10);
//         break;
//     default:
//         break;
// }