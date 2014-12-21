// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var entryData = [
			 	{
					clue: "First letter of greek alphabet",
					answer: "alpha",
					position: 1,
					orientation: "across",
					startx: 1,
					starty: 1
				},
				{
					clue: " second time First letter of greek alphabet",
					answer: "alpha1",
					position: 1,
					orientation: "down",
					startx: 1,
					starty: 1
				},
				{
					clue: "First letter of greek alphabet and ",
					answer: "alpha21",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 5
				}
			
			] 
	
		$('#puzzle-wrapper').crossword({
			entryData: entryData,
			showAnswers: false,
			id: "my-crossword",
			successCallback: function(){alert("Congrats!");}
		});
		
	})
	
})(jQuery)
