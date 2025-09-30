// Lance Briggs



// Minimum 
/* Define the function min that takes two arguments and returns their minimum.
*/
function min(a, b) {
  if (a < b) return a;
  else return b;
}

console.log(min(0, -10));




// Recursion
/* Define a recursive function isEven corresponding to this description. 
*/
function isEven(n) {
  if (n < 0) return isEven(-n);     
  if (n === 0) return true;         
  if (n === 1) return false;       
  return isEven(n - 2);             
}

console.log(isEven(80));  
console.log(isEven(45));  
console.log(isEven(-5));  


// Bean Counting
/* Write a function called countBs that takes a string as its only argument and returns 
a number that indicates how many uppercase B characters there are in the string. 
Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting 
only uppercase B characters). Rewrite countBs to make use of this new function.
*/

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("LOBBY"));

console.log(countChar("Mississippi", "s"));

// https://chatgpt.com/share/68c1408a-92b4-800a-8d24-1dee682a2a73