// STEP 01
// let fave = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// console.log(fave[1]);

// STEP 02
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// console.log(movies[0]);

// STEP 03
// let movies = new Array(5);
// movies[0] = 'Moana';
// movies[1] = 'Soul';
// movies[2] = 'Inception';
// movies[3] = 'GoodFellas';
// movies[4] = 'Seaspiracy';
// movies.splice(2,0, 'BFG');//.splice(index,deletecount, item1, item2)
// console.log(movies.length);

// STEP 04
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy'];
// movies.splice(0,1);
// console.log(movies);

// STEP 05
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// for (let i in movies) {
//     if(movies.hasOwnProperty(i)) {
//         console.log(movies[i]);
//     }
// }

// STEP 06
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// for (let i of movies) {
//     console.log(i);
// }

// STEP 07
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// movies.sort();
// for (let i of movies) {
//     console.log(i);
// }


// STEP 08
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

// STEP 09
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());

// STEP 10
// Array.prototype.myname = () => {};

// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// movies = movies.pop();
// console.log(movies);


// STEP 11
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];
// movies = movies.concat(leastFavMovies);
// console.log(movies.reverse());
// movies = movies.shift();
// console.log(movies);


// STEP 12
// let movies = ['Moana', 'Soul', 'Inception', 'GoodFellas', 'Seaspiracy', 'BFG', 'Toy Story'];
// let leastFavMovies = ['Twilight', 'Eclipse', 'Catwoman'];

// for (let movie in leastFavMovies) {
//     leastFavMovies[movie] = movies[movie]
// };
// console.log(leastFavMovies);

// STEP 13
// let movies = [
//     ['Moana', 1],
//     ['Soul', 2],
//     ['Inception', 3],
//     ['Toy Story', 4],
//     ['GoodFellas', 5]
// ];

// movies.forEach((i) => {
//     console.log(`${i[0]}`);});



// STEP 14
// let employees = ['Zak', 'Jessica', 'Mark', 'Fred', 'Sally'];
// function showEmployee(employees){
//     console.log('Employees:');
//     console.log('');
//     for(let i of employees) {
//         console.log(i.toUpperCase() + '\n');
//     }
// }
// showEmployee(employees);

// STEP 15
// function filterValues(arr) {
//     arr = arr.filter(value => value);
//     return arr;
// };
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

// STEP 16
// function ranNum(items){
//   return items[Math.floor(Math.random()*items.length)];   
// };
// let items = [2, 4, 21, 36, 25];
// console.log(ranNum(items));

// STEP 17 
// let numbers = [69, 420, 108, 47];
// let numMax = Math.max(...numbers); 

// console.log(numMax);
