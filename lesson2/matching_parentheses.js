// takes a string
// returns boolean
  // check if string contains properly balanced parentheses
      // ( ) occur in matching pairs starting with (

function isBalanced(string) {
  let count = 0;

  for(let i = 0; i < string.length; i++) {
    if (string[i] === ')' && count === 0) return false;
    if (string[i] === '(') count += 1;
    if (string[i] === ')') count -= 1;
  }

  return count === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false
