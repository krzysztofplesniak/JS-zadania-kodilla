
// Deklaracja 2 tablic 

var text1 = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach";
var text2 = "Zielone słonie";

//Zamiana słowa Papugi na Animals
var text1Replaced = text1.replace('Papugi','Animals');

// Zamiana tekstu na duze litery
var text2UpperCase = text2.toUpperCase();

var addedStringTogether = text2UpperCase + ' ' + text1Replaced;
var lengthOfStrings = addedStringTogether.length;

console.log(text2UpperCase);
console.log(text1Replaced)

console.log('Połowa połączonego łańucha wyglada tak -> ' + addedStringTogether.slice(0, lengthOfStrings/2));