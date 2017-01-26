button = document.getElementsByClassName('button');

console.log("Na ekranie są " + button.length + " przyciski");
console.log("A zawarty w nich teskt to: ");

for (i = 0; i < button.length; i++) {
	console.log("Button #" + i + ' ma tekst = ' + button[i].innerText);
}