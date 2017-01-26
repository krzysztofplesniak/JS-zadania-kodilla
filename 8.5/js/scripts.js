
alert("test");

//deklaracja 

var a = 0;
var b = 0;

// Pobranie zmiennych od użytkownika

a = prompt('Wpisz liczbę #1');
b = prompt('Wpisz liczbę #2');

// wyliczenie 

var value = (a*a) + (2 * a * b) - (b*b);
var wynik = '';
if (value == 0) { wynik = "wynosi zero"} 
if (value > 0) { wynik = "jest liczbą dodatnią"} 
	else { wynik = " wynik jest liczbą ujemną"} 

console.log('Wartość działania to = ' + value);
console.log('Wynik działania ' + wynik);