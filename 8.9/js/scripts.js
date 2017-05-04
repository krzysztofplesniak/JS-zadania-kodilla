function drawTree (repeat)  {
	
	var starString = '';	

	for ( var row = 0 ; row < repeat; row++) {
		for ( var column = 0 ; column < (row*2-1) ; column++) {
	    	starString += '*';
	    	document.write(starString);
	    	console.log('Ilość gwiazdek to: ' + starString);
		}    		    
	 	    
	}
	
}

    