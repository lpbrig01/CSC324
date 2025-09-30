// Flattening

/* Use the reduce method in combination with the concat method to “flatten” an array of 
arrays into a single array that has all the elements of the original arrays
*/

let arrays = [[1, 2, 3], [4, 5], [6]];

let flattened = arrays.reduce((acc,curr) => acc.concat(curr), []);

console.log(flattened)

// Write Your Own Loop Function

/*Write a higher-order function loop that provides something like a for loop statement. 
It should take a value, a test function, an update function, and a body function.
*/

function loop(start, update, test, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
loop(3, n => n > 0, n => n - 1)
console.log(loop)


// Everything


/* Write two versions, one using a loop and one using the some method.
*/

function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([3, 5, 27], n => n < 10));

console.log(every([9, 5, 2], n => n <10));

console.log(every(4, 11, 12, n => n < 10));

