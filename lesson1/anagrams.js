// takes two arguments, a word and an array of words
  // return an array
    // contains all the words from the array that are anagrams of the word

function anagram(word, list) {
  let sorted = (word) => word.split('').sort().join('');
  
  return list.filter(function(currentWord) {
    return sorted(currentWord) === sorted(word);
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]