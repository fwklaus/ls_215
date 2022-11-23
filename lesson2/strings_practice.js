let firstName  = 'Forrest';
let lastName = 'Klausmeier';
let fullName = `${firstName} ${lastName}`;

console.log(fullName);
console.log(firstName.concat(lastName));

console.log(fullName.split(' '));


let language = 'JavaScript';
let idx = language.indexOf('S');
console.log(idx); // 4

let charCode = language.charCodeAt(idx);
console.log(charCode); // 83

console.log(String.fromCharCode(charCode)); // S

let idx2 = language.lastIndexOf('a');
console.log(idx2); // 3

let a = 'a';
let b = 'b';
console.log(a > b); // false
b = 'B';
console.log(a > b); // true

console.log(language.slice(1, 4)); // ava
console.log(language.slice(2, 4)); // va


console.log(language.substring(1, 4)); // ava
console.log(language.substring(2, 4)); // va


console.log(language.slice(1, -1)); // avaScrip
console.log(language.slice(2, -1)); // vaScrip

console.log(language.substring(1, -1)); // J
console.log(language.substring(2, -1)); //  Ja


let fact1 =  'JavaScript is fun';
let fact2 =  'Kids like it too';
let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
console.log(compoundSentence);

console.log(fact1[0]); // J
console.log(fact2[0]);

let pi = 22/7;
pi = pi.toString();
console.log(pi.lastIndexOf('14')); // 14


// let boxNumber = (356)..toString();
let boxNumber = (356).toString();
console.log(boxNumber); //  356

boxNumber = parseInt(boxNumber);
console.log(typeof boxNumber); // number

boxNumber = String(boxNumber);
console.log(typeof boxNumber); // string


let name = prompt('What is your name? ');

if (name.slice(-1) === '!') {
  console.log(`HELLO ${name.toUpperCase()} WHY ARE WE SCREAMING!`);
} else {
  console.log(`Hello ${name}`);
}
