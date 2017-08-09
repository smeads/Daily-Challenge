const string = 'abcairfge';

// string.match(/(.+)(?=.*?\1)/g).join('');

// function duplicateString(str) {
//   str = str.split('').sort();

//   for (let i = 0; i <= str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       if (str[i] === str[j]) return str[i];
//     }
//   }
//   return 'no duplicates';
// }

function duplicateString(str) {
  const checker = {};

  for (let i = 0; i < str.length; i += 1) {
    if (checker[str[i]]) return str[i];
    checker[str[i]] = true;
  }
  return 'no duplicates';
}

// duplicateString(string);
module.exports = duplicateString;
