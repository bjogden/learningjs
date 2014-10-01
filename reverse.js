// Listen for click
function wake_listeners() {
	document.getElementById('reverse-btn').addEventListener('click', present_text);
};

// Get text
function get_text() {
	return document.getElementsByName('reverse')[0].value;
};

// Reverse text
function reverse_text() {
	var input_text = get_text();
	var reversed = "";

    if (input_text) {
	    for (var text_length = input_text.length-1 ; text_length >= 0 ; text_length--) {
		    reversed += input_text[text_length];
	    };
    } else {
        reversed += "Please enter some text.";
    }

	return(reversed);
}

// Present reversed text
function present_text() {
	var result = reverse_text();
    document.getElementsByName('reverse')[1].value = result;
}

// Kick it off
wake_listeners();