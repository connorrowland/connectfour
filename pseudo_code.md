HTML
	1. Board game is in the body and is a div i guess
	2. button feature that will determine which column someone wants to place their token. Button is displayed 7 times for each column.
	3. "invisible Tokens"---div that gets created when a user places a token in a column 
	4. 2 h2 elements that are displayed to the left of the game board. Each has a specific Id. These will represent the amount of tokens left per player. 


CSS
	1. grid for the board game feature. border around this grid. make it look nice with multiple borders of contrasting border px thickness
	2. button is a white circle with a black border
	3. 2 token css elements- will be a certain color depending on who's turn it is
		.class 1
			make token color black
		.class 2
			make token color red
	4. 3 borders that match those around the game board


JS
	1. board game is defined as an empty array
	2. siblings of in eq (whatever position column) and have a click event for each that will then do some function. 
	3. make a variable for black tokens and set equal to 21.
		make a variable for red tokens and set equal to 21.
		make a variable for turn that will equal black (just decided to start with black, no specific reason why it's being set to that first.) 
		
		when the user selects a column that they wish to drop a token in, generate a div for that token (we are creating the token). 
		*subtract -1 from the black tokens var (or red, if that's the turn) and append this to the black or red "tokens left" h2 text (we are updating the h2 to display the correct amount of tokens)
		
		Set that token's attribute to a class contingent on which player has placed it (black/red). 
 
			if(turn === black) change the class of the token to black and then the css property will execute, making the token black

		"reset" the turn variable by setting it equal to red before the function is closed. close the function and then make the else statement for the red tokens. (this allows for the program to automatically switch back and forth between black and red)
	4. grab the specific Id of the h2 elements and set the text equal to red tokens
			do the same for black tokens. this gets appended above in 3 at the *


