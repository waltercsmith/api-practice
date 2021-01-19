"use strict"

// fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
//     .then(response => (response))
//     .catch(error => (error));

// const myPromise = fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
// myPromise.then(response => console.log(response) );
// myPromise.then(error => console.log(error));

fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then(response => {response.json().then( films => {
        console.log(films)
    })
//Was able to log object to the console
})

function addTwoNumber(num1,num2){
    if (typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }else {
        return console.log("Please enter number");
    }
}

console.log(addTwoNumber(5, 4));

document.getElementById('demo').innerHTML = addTwoNumber(5,4);

console.log(addTwoNumber("5", "5")); //Will not print the sum because these two inputs are strings




