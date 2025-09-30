// Lance Briggs

// Looping a Triangle
/* Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
####### 
*/
let triangle= ""

for (let triangle = "#";
    triangle.length <= 7;
    triangle += "#") {
        console.log(triangle);
    }
   
// FizzBizz
/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
*/
for (let n = 1; n <= 100; n++) {
  const by3 = n % 3 === 0;
  const by5 = n % 5 === 0;
  if (by3 && by5) {
    console.log("FizzBuzz");
  } else if (by3) {
    console.log("Fizz");
  } else if (by5) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}

// Chessboard
/* Write a program that creates a string that represents an 8×8 grid, 
using newline characters to separate lines.
# # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/
let size = 8; 
let board = "";

for (let y = 0; y < size; y++) {
  let line = "";
  for (let x = 0; x < size; x++) {
    line += (x + y) % 2 === 0 ? " " : "#";
  }
  board += line + "\n";
}

console.log(board);
