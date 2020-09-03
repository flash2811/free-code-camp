//each aplhabet is set to their code
var lookup = {
  'A': 'N','B': 'O','C': 'P','D': 'Q',
  'E': 'R','F': 'S','G': 'T','H': 'U',
  'I': 'V','J': 'W','K': 'X','L': 'Y',
  'M': 'Z','N': 'A','O': 'B','P': 'C',
  'Q': 'D','R': 'E','S': 'F','T': 'G',
  'U': 'H','V': 'I','W': 'J','X': 'K',
  'Y': 'L','Z': 'M'
};

function rot13(encodedString) {
  var codeArr = encodedString.split("");
  //stores the decoded string
  var decodedArr = [];

  decodedArr = codeArr.map(function(letter) {
    // find the right match using the lookup 
    if(lookup.hasOwnProperty(letter)) {
      letter = lookup[letter];
    }
    //returns the letter found and adds it back to the arr
    return letter;
  });

  // return a string
  return decodedArr.join("");
}
