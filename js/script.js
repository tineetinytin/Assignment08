//01 STRING ARRAY
// let fave = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// console.log(fave[1]);

//02 CONSTRUCTOR METHOD
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// console.log(movies[0]);

//03 CONSTRUCTOR METHOD + ADD NEW MOVIE IN 3RD POSITION
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// movies.splice(2,0, 'BFG');//.splice(index,deletecount, item1, item2)
// console.log(movies.length);

//04 LITERAL NOTATION & DELETE
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// movies.splice(0,1);
// console.log(movies);

//05 LITERAL NOTATION FOR/IN LOOP
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// for (let i in movies) {
//     if(movies.hasOwnProperty(i)) {
//         console.log(movies[i]);
//     }
// }

//06 FOR/OF LOOP
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// for (let i of movies) {
//     console.log(i);
// }

//07 SORTED
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }


//08 NEW ARRAY
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// console.log('Movies I like:');
// console.log('');
// for (let i in movies) {
//     if(movies.hasOwnProperty(i)) {
//         console.log(movies[i]);
//     }
// };
// console.log('');
// console.log('Movies I regret watching:');
// console.log('');
// for (let i in leastFavMovies) {
//     if(leastFavMovies.hasOwnProperty(i)) {
//         console.log(leastFavMovies[i]);
//     }
// };

//09 CONCAT & REVERSE
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());

//10 LAST ITEM
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// movies = movies.pop();
// console.log(movies);


//11 FIRST ITEM
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// movies = movies.shift();
// console.log(movies);


// // ----------------------------12
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies);
// let hateMovies = movies.slice(7);
// console.log(hateMovies);
// console.log(movies);
//------------------------------

//------------------------------13
// let movies = [
//     ['Moana', 1],
//     ['Soul', 2],
//     ['Inception', 3],
//     ['Toy Story', 4],
//     ['GoodFellas', 5]
// ];
// console.table(movies);

// movies.filter((movie) => {
//     return typeof item === 'string';
// });
// console.log(movies);
// let movies = ['Moana', 1, 'Soul', 2, 'Inception', 3, 'Toy Story', 4, 'GoodFellas', 5];
// let rank = movies.filter((item) => {
//     return typeof item === 'string';
// });
// console.log(rank);
//--------------------------------

// let employees = ['Rollo', 'Misty', 'Jordan', 'Elene', 'Ave', 'Martin'];
// function showEmployee(employees){
//     console.log('Employees:');
//     console.log('');
//     for (let i in employees) {
//         if(employees.hasOwnProperty(i)) {
//             console.log(employees[i]);
//             }
//     };
// showEmployee();

// console.log('Employees:');
//     console.log('');
//     for (let i in employees) {
//         if(employees.hasOwnProperty(i)) {
//             console.log(employees[i]);
//         }
//     };


//15 FILTER VALUES
// let data = [58, '', 'abcd', true, null, false, 0];
// let filterData = data.filter((item) => {
//     return typeof item === 'false' || typeof item === null || typeof item === 0 || typeof item === '';
// });
// console.log(filterData);



//17 LARGEST NUMBER
console.log(math.max());