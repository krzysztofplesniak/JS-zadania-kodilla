$(function(){

	console.log('DOM załadowany - można się bawić');

	$("span:odd").css('color','red');

	var paragraphs = $('p span');

	paragraphs.each(function(index, element) {

		var button = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(button); 

	});

	$(".btn").click(function(){
		alert("I'am button # " + $(this).attr("data-tmp"));
	});
});