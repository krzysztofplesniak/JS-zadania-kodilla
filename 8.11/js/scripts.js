button = document.getElementById('button');

var i = 1; 
button.addEventListener('click', function() {
	var ul = document.getElementById('lista');
	var newElem = document.createElement('li');
	newElem.innerHTML = "Składnik #" + i; 
	ul.appendChild(newElem);  
	i++;
});