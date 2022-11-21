// determine whether string has any characters that appear more than once
    // return boolean
      // true if all characters unique
    // ignore multiple spaces and case differences

function isAllUnique(string) {
  string = string.toLowerCase().replace(/[\s]/g, '').split('');
  let obj = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (obj[letter]) {
      return false;
    } else {
      obj[letter] = true;
    }
  }

  return true;
}

console.log(isAllUnique('The quick brown fox jumped over a lazy dog'));  // false
console.log(isAllUnique('123,456,789'));                                 // false
console.log(isAllUnique('The big apple'));                               // false
console.log(isAllUnique('The big apPlE'));                               // false
console.log(isAllUnique('!@#$%^&*()'));                                  // true
console.log(isAllUnique('abcdefghijklmnopqrstuvwxyz'));                  // true