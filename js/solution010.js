//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

//"hello world".toAlternatingCase() === "HELLO WORLD"
//"HELLO WORLD".toAlternatingCase() === "hello world"
//"hello WORLD".toAlternatingCase() === "HELLO world"
//"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
//"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
//"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
//"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

//As usual, your function/method should be pure, i.e. it should not mutate the original string.

//P: string
//E: //"hello world".toAlternatingCase() === "HELLO WORLD"
     //"HELLO WORLD".toAlternatingCase() === "hello world"
     //"hello WORLD".toAlternatingCase() === "HELLO world"
     //"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
     //"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
     //"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
     //"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
//R: string with letter case switched
//P: 
//split the string into an array
//for each element, if it is a letter, switch the case
//join the array back into a string
String.prototype.toAlternatingCase = function () {
  return this.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
}