/* =begin
PROBLEM: determine if we can spell a word with the given "blocks"

input: string 
output: boolean
mutating?:

rules:
   -explicit:
    - take a string
    - blocks have two letters
      - blocks can only be used once
    - returns boolean
      - true if word can be spelled
      - false otherwise
    - letters are case-insensitive
    
   -implicit:
     
unclear parts of problem?:

examples/test_cases:

BATCH // true
BUTCH // false
jest  // true


B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

data/alg:
how do we want to store the "blocks"? array

take a word argument
convert to uppercase
iterate over word
  for each charcter 
    iterate over "blocks" with index
    check for a match
    if matching character, delete the block at the matching index

*/

function isBlockWord(word) {
  let blocks = ['BO', 'XK', 'DQ', 'CP', 'NA', 'GT', 'RE', 'FS', 'JW', 'HU', 'VI', 'LY', 'ZM'];

  word = word.toUpperCase();

  for (let i = 0; i < word.length; i++) {
    let match = false;
    let letterRegex = new RegExp (word[i]);
    let deleteAt;

    blocks.forEach((block, idx) => {
      if  (letterRegex.test(block)) {
        match = true
        deleteAt = idx;
      }
    });

    blocks.splice(deleteAt, 1);
    if (!match) {
      return false;
    }
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
