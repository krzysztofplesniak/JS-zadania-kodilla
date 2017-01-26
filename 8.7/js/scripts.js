
// Deklaracja 2 tablic 

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

// łaczenie tablic

var allNames = femaleNames.concat(maleNames);

// Deklaracja nowej zmiennej 

var newName ='Marian'

if (allNames.indexOf(newName) === -1) {
	allNames.push(newName); 
}

console.log('Tablica po działaniach wyglada tak ' + allNames);
console.log('Tablica ma razem ' + allNames.length +' znaków');
