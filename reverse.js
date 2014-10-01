// Listen for click
function wake_listeners() {
	document.getElementById('reverse-btn').addEventListener('click', all_together);
};

// Get text
function get_text() {
	var check_value = document.getElementsByName('reverse')[0].value;

	if (!check_value) {
		return "!txet emos retnE";
	} else {
		var pre_reverse_text = check_value;
		return(String(pre_reverse_text));
	}
};

// Reverse text
function reverse_text() {
	var pre_reversed = get_text();
	var reversed = "";

	for (var text_length = pre_reversed.length ; text_length >= 0 ; text_length--) {
		reversed += pre_reversed[text_length];
	};

	return(reversed);
}

// Present reversed text
function all_together() {
	var result = reverse_text();

	result = result.replace('undefined', '');

	document.getElementsByName('reverse')[1].value = result;
}

// Kick it off
wake_listeners();