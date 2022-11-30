/* =begin
PROBLEM: comparing software version numbers

input: version numbers (2)
output: number
mutating?: no

rules:
   -explicit:
      -takes two version numbers 
      -compares them
      -returns number
        -whether first number is greater, less, equal to the second number
          1 if 1 > 2
          -1 if 1 < 2
          0 if 1 === 2
          null if either version number contains chars other than digits and .
   -implicit:
      -numbers with higher values in a "decimal place" are larger than a number with smaller values in a "decimal place" that has more decimal places
      -start comparison in leftmost decimal place, move right if values are equal
      -numbers are equal if all "decimal" values are all the same, or if all values are all the same excluding the final "decimal places" if 0
     
unclear parts of problem?:

version numbers appear to be decimal numbers, but are not?

examples/test_cases:
compareVersions(0.1, 1)
compareVersions(1, 1.0)
compareVersions(1.0, 1.1)
compareVersions(1.1, 1.2)
compareVersions(1.2, 1.2.0.0)
compareVersions(1.2.0.0, 1.18.2)
compareVersions(1.18.2, 13.37) 


legal versions numbers:
1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Version number ordering: 
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

data/alg:
take two string arguments - represents version numbers
validate numbers - should only contain number chars or .
split strings on .

determine array lengths
  check excessive values of longer array
  if values match 0 and . - /\.0+\./
  remove excessive indexes - splice

iterate over array - for
  convert string to number - Number
  compare each group
    return appropriate value depending on comparison


need to determine length of arrays before result
remove trailing zeroes and .

need to compare up to the length of the shorter 
- if equal, check the trailing 

// endOfVersionRegex = /[0.]+$/;
*/

function compareVersions(version1, version2) {
  let validRegex = /^[0-9]+(\.[0-9]+)*$/;
  if (!validRegex.test(version1) || !validRegex.test(version2)) {
    return null;
  }

  let split1 = version1.split('.');
  let split2 = version2.split('.');
  let longer = Math.max(split1.length, split2.length);
  
  for (let i = 0; i < longer; i++) {
    let current1 = Number(split1[i]) || 0; 
    let current2 = Number(split2[i]) || 0; 
    
    if (current1 > current2) {
      return 1;
    } else if (current1 < current2) {
      return -1;
    }
  }
  
  return 0;
}


console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('13.37', '1.18.2') === 1);

// edge case 
console.log(compareVersions('1.2.0.0', '1.2.1.0') === -1);
console.log(compareVersions('.01234', '1.2') === null);  // null
console.log(compareVersions('....0.', '0.a') === null);  // null
console.log(compareVersions('3.', '0.1') === null);  // null
console.log(compareVersions('1.5.0.3', '1.5') === 1);  // null
//


// fix validation

// pad zeros on shorter version  numbers when another number exceeds the comparison indexes