//STRING ARRAY
// let fave = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// console.log(fave[1]);

//CONSTRUCTOR METHOD
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// console.log(movies[0]);

//CONSTRUCTOR METHOD + ADD NEW MOVIE IN 3RD POSITION
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// // console.log(movies[0]);
// movies[2] = "BFG"
// console.log(movies.length);
// console.log(movies);

//LITERAL NOTATION & DELETE
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// delete movies[0];
// console.log(movies);

//LITERAL NOTATION FOR/IN LOOP
let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
for (let i in movies) {
    console.log(movies[i]);
}