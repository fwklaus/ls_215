// takes an array
// returns an object


let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  return data.map(band => processBandData(band));
}

function processBandData(band) {
  band.country = "Canada";
  band.name = capitalize(band.name);

  return band;
}

function capitalize(name) {
  name = name.replace(/[.]/, '' );
  let bandNameWords = name.split(' ');
  let capitalize = function(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  };

  return bandNameWords.map(capitalize).join(' ');
}

console.log(processBands(bands));

// should return:
/*
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
*/
