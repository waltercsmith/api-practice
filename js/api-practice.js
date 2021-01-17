"use strict"

// fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
//     .then(response => (response))
//     .catch(error => (error));

// const myPromise = fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49');
// myPromise.then(response => console.log(response) );
// myPromise.then(error => console.log(error));

fetch('https://ghibliapi.herokuapp.com/films/58611129-2dbc-4a81-a72f-77ddfc1b1b49')
.then(response => {response.json() // when I justt left with the .json() then nothing was logged in the console
    console.log(response);
})