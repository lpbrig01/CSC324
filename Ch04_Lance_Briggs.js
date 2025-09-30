// Flattening
/* Use the reduce method in combination with the concat method to “flatten”
 an array of arrays into a single array that has all the elements of the 
 original arrays. 
 */

function range(start, end, step) {
  if (step == null) {
    if (start <= end) step = 1;
    else step = -1;
  }
  var out = [];
  if (step > 0) {
    for (var i = start; i <= end; i += step) out.push(i);
  } else {
    for (var j = start; j > end; j += step) out.push(j);
  }
  return out;
}


// Revising an Array
/* For this exercise, write two functions, reverseArray and reverseArrayInPlace
*/

function reverseArray(arr) {
  var r = [];
  for (var i = arr.length - 1; i >= 0; i--) r.push(arr[i]);
  return r;
}

function reverseArrayInPlace(arr) {
  for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) { 
    var j = arr.length - 1 - i;
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  return arr;
}

// A List
/* Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] 
as argument. Also write a listToArray function that produces an array from a list.
*/

function arrayToList(arr) {
  list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  var arr = [];
  for (var node = list; node != null; node = node.rest) 
  return arr;
}

function prepend(value, list) {
  return { value: value, rest: list };
}

function n(list, n) {
  var node = list, i = 0;  {
    if (i == n) return node.value; 
    node = node.rest;
    i++;
  }
  return undefined;
}
https://eloquentjavascript.net/code/#4.3
// Deep Comparsion
/* Write a function deepEqual that takes two values and returns true only if they are the
 same value or are objects with the same properties, where the values of the properties 
 are equal when compared with a recursive call to deepEqual.
 */

 function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);

  if (keysA.length != keysB.length) return false;

  return true;
}
https://eloquentjavascript.net/code/#4.4