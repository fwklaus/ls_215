// checks whether an email address is valid
// There must be one @ sign.
// The local part must contain one or more letters (A-Z, a-z) and/or digits (0-9). It may not contain any other characters.
// The domain part must contain two or more components with a single dot (.) between each component. Each component must contain one or more letters (A-Z, a-z) only.


//local-part@domain-part
// initial validation to check if there's an @ - return false otherwise
// local part
// domain part
// validate each oart of the email address

let isValidLocalPart = function(part) { 
  let partLength = part.length;
  let pattern = new RegExp(/[^0-9a-z]/i);
  part = part.replace(pattern, '');
  return (/[a-z0-9]/i.test(part)) &&
         (part.length === partLength);
};

let isValidDomainPart = function(part) {
  let splitPart = part.split('.')
  let pattern = new RegExp(/[a-z]/i);
  return (splitPart.every(word => pattern.test(word))) &&
         (splitPart.length >= 2) &&
         ((splitPart.includes('com')) || (splitPart.includes('ph')))
};

function isValidEmail(email) {
  if (!/[@]/.test(email)) return false;
  [localPart, domainPart] = email.split('@');

  return isValidLocalPart(localPart) && isValidDomainPart(domainPart);
}

console.log(isValidEmail('Foo@baz.com.ph'));          // returns true
console.log(isValidEmail('Foo@mx.baz.com.ph'));       // returns true
console.log(isValidEmail('foo@baz.com'));             // returns true
console.log(isValidEmail('foo@baz.ph'));              // returns true
console.log(isValidEmail('HELLO123@baz'));            // returns false
console.log(isValidEmail('foo.bar@baz.to'));          // returns false
console.log(isValidEmail('foo@baz.'));                // returns false
console.log(isValidEmail('foo_bat@baz'));             // returns false
console.log(isValidEmail('foo@bar.a12'));             // returns false
console.log(isValidEmail('foo_bar@baz.com'));         // returns false
console.log(isValidEmail('foo@bar.....com'));         // returns false
