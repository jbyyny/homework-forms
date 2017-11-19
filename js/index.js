// step 3 add in the js to check form validation
$(document).ready(function () {

	// on form submit check for errors or return
	$('#my-form').submit(function(event){
		// prevent default form submission and handle in js
		event.preventDefault();
		// add storage for errorMessage on page so we can display if errors
		var errorMessage = "";
		// reset the message on the page
		$('.errors').addClass("hidden");
		$('.errors').html("<h4>Oh snap!</h4><p>This form seems to be invalid :(</p>");

		// get the text and password inputs and check the fields
		var textInputs = $('input[type="text"],input[type="password"]');

		//loop through the inputs, for required fields
		for(var i=0; i < textInputs.length; i++){
			// store current input in a variable
			var current = textInputs[i];
			//reset the class
			$(current).removeClass("missing");

			//test to see if this is a required field
			if($(current).attr('class') === "required"){
				// if it is required AND it is blank
				// add missing class to it
				if($(current).val() == ""){
					$(current).addClass("missing");
					// also add a message to errors at the top of the page
					// and show the errors.
					errorMessage = errorMessage + $(current).attr('name') + " is missing.</p>";
				}		
			}
		}

		// at the end of checking all messages, see if there is an errorMessage to display on the page
		// if so display it.
		if(errorMessage != ""){
			//append the html with the message
			$('.errors').append("<p class='messages'>" + errorMessage + "</p>");
			//remove the hidden class
			$('.errors').removeClass("hidden");
		}
	});

});