// Listen for click
function wake_listeners() {
	document.getElementById('reverse-btn').addEventListener('click', reverse);
};

// Get text
function get_text() {
	return document.getElementById('reverse_input').value;
};

// Reverse text
function reverse_text(input_text) {
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

// Update text
function update_results(result) {
    document.getElementById('reversed').value = result;
}

// Callback for reversed function
function reverse() {
    var input_text = get_text();
	var result = reverse_text(input_text);
    update_results(result);
}

// Kick it off
wake_listeners();