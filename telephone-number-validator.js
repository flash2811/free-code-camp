//why would anyone use rejex for such a problem?

//check for 1
//number of digits 3 3 4
//spaces or dashes 
var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

function telephoneCheck(str) {
  
  //return true or false
  return regex.test(str);
}

telephoneCheck("555-555-5555");
