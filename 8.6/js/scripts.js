
//deklaracja funkcji 
var getTriangleArea = function getTriangleArea(a, h) {

// wyliczenie pola trójkąta

 	if ((a <= 0) || (h <= 0)) {
 		console.log('Nieprawidłowe dane, dane nie mogą liczba ujemna lub równą zero')
 		return 0;
 	} else return 1/2*a*h;
 	
}

// Pobranie zmiennych od użytkownika
a = prompt('Wpisz podstawę trójkąta');
h = prompt('Wpisz wysokość trójkąta');

// Informacja o wyniku 
console.log('Podałeś następujace dane: podstawa = ' + a + ' wysokość = ' + h);
pole = getTriangleArea(a , h);
if ( pole > 0) {console.log('Pole tójkąta wynosi = ' + pole)};



