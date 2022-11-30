/* =begin
PROBLEM: Implement encoding and decoding for the rail fence cipher. Write two functions - one to encrypt, one to decrypt

input: unencrypted string (encrypted string)
output: encrypted string  (unencrypted string)
mutating?:

rules:
   -explicit:
    - takes a message string
      - encrypts the string
      - returns the encrypted string

    - takes an encrypted string
      - deencrypts the string
      - returns the message
    
   -implicit:
     
unclear parts of problem?:
rail fence cipher: form of transposition cipher 
  - message is written downwards on successsibe "rails"
  - message zig-zags - down, up, down, up, etc.

- is the relationship between letters on each line always the same?
- top - 3
- middle - 1
- bottom - 3
- is line legth a factor? 49
    - based on the message length? 30

W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .

It appears the lengths and the cipher text are determined by the message
- we remove all spaces between words
W . . . E . . . C . . . R . . . L . . . T . . . E [0, 4, 8, 12, 16, 20, 24]
. E . R . D . S . O . E . E . F . E . A . O . C . [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]
. . A . . . I . . . V . . . D . . . E . . . N . .[2, 6, 10, 14, 18, 22]

Encrypt message with the fence
Decrpy string with the fence

examples/test_cases:
WE ARE DISCOVERED FLEE AT ONCE
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
WECRLTEERDSOEEFEAOCAIVDEN

data/alg:
- remove empty spaces from string
- iterate over array
  -first line - index starting at 0, increment by 4
  - second line - index starting at 1, increment by 2
  - third line - index starting at 2, increment by 4

- create return index
- iterate from beginning to last index
  - at each index, append the existing element from one of the arrays

- return the message


- determine the length of the encrypted string
- determine the indexes for the three rails
- splice off the appropriate number of elements from the encrypted string
- populate three rows at correct indexes
- join the three rows together


// if indexes has i
// add rail[currentPosition] to paddedRail
// otherwise, add '.' to paddedRail

*/

const MESSAGE  = 'WE ARE DISCOVERED FLEE AT ONCE';
const ENCRYPTED = 'WECRLTEERDSOEEFEAOCAIVDEN';

function encode(message) {
  message = message.replace(/[\s]/g, '');
  let first, second, third;
  let encrypted = '';

  first = getFirstRail(message);
  second = getSecondRail(message);
  third = getThirdRail(message);

  encrypted += first.filter(element => element !== '.').join('');
  encrypted += second.filter(element => element !== '.').join('');
  encrypted += third.filter(element => element !== '.').join('');

  return encrypted;
}

function getFirstIndexes(messageLength) {
  let indexes = [];
  for (let i = 0; i < messageLength; i += 4) {
    indexes.push(i)
  }

  return indexes;
}

function getSecondIndexes(messageLength) {
  let indexes = [];
  for (let i = 1; i < messageLength; i += 2) {
    indexes.push(i)
  }

  return indexes;
}

function getThirdIndexes(messageLength) {
  let indexes = [];
  for (let i = 2; i < messageLength; i += 4) {
    indexes.push(i)
  }

  return indexes;
}

function getFirstRail(message) {
  let firstRail = [];
  let indexes = getFirstIndexes(message.length);

  for (let i = 0; i < message.length; i++) {
    if (indexes.includes(i)) {
      firstRail.push(message[i]);
    } else {
      firstRail.push('.');
    }
  }

  return firstRail;
}

function getSecondRail(message) {
  let secondRail = [];
  let indexes = getSecondIndexes(message.length);

  for (let i = 0; i < message.length; i++) {
    if (indexes.includes(i)) {
      secondRail.push(message[i]);
    } else {
      secondRail.push('.');
    }
  }

  return secondRail;
}

function getThirdRail(message) {
  let thirdRail = [];
  let indexes = getThirdIndexes(message.length);

  for (let i = 0; i < message.length; i++) {
    if (indexes.includes(i)) {
      thirdRail.push(message[i]);
    } else {
      thirdRail.push('.');
    }
  }

  return thirdRail;
}


function mapRail(message, rail, indexes) {
  let currentPosition = 0;
  let paddedRail = [];

  for (let i = 0; i < message.length; i++) {
    if (indexes.includes(i)) {
      paddedRail.push(rail[currentPosition]);
      currentPosition += 1;
    } else {
      paddedRail.push('.');
    }
  }

  return paddedRail;
}

function decode(encryptedMessage) {
  let encryptedLength = encryptedMessage.length;
  let decrypted = '';
  
  let firstIndexes = getFirstIndexes(encryptedLength);
  let secondIndexes = getSecondIndexes(encryptedLength);
  let thirdIndexes = getThirdIndexes(encryptedLength);
  
  let firstRail = encryptedMessage.slice(0, firstIndexes.length);
  let secondRail = encryptedMessage.slice(firstIndexes.length, firstIndexes.length + secondIndexes.length);
  let thirdRail = encryptedMessage.slice(firstIndexes.length + secondIndexes.length);

  firstRail = mapRail(encryptedMessage, firstRail, firstIndexes);
  secondRail = mapRail(encryptedMessage, secondRail, secondIndexes);
  thirdRail = mapRail(encryptedMessage, thirdRail, thirdIndexes);

  for (let i = 0; i < encryptedMessage.length; i++) {
    if (firstRail[i] !== '.') {
      decrypted += firstRail[i];
    } else if (secondRail[i] !== '.') {
      decrypted += secondRail[i];
    } else if (thirdRail[i] !== '.') {
      decrypted += thirdRail[i];
    }
  }

  return decrypted;
}


console.log(encode(MESSAGE) === ENCRYPTED);
console.log(decode(ENCRYPTED) === 'WEAREDISCOVEREDFLEEATONCE');
