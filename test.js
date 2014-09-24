// Get time
function get_time() {
	var time_now = new Date();
	var hours = time_now.getHours();
	var minutes = time_now.getMinutes();
	var seconds = time_now.getSeconds();
	var display_time = format_time(hours, minutes, seconds);

	set_background_color(next_color(document.body.style.backgroundColor));

	alert(changed_message(document.body.style.backgroundColor.toUpperCase(), display_time));
}

// Format time
function format_time(hours, minutes, seconds) {
	if (hours > 12) { hours = hours - 12 };
	if (minutes < 10) { minutes = "0" + minutes };
	if (seconds < 10) { seconds = "0" + minutes };
	return hours + ":" + minutes + ":" + seconds;
}

// Change background color
function next_color(current_color) {
	var next_color;
	if (current_color === "red") {
		next_color = "blue";
	} else if (current_color === "blue") {
		next_color = "green";
	} else {
		next_color = "red";
	}
	return next_color;
}

// Set background color
function set_background_color(color) {
	document.body.style.backgroundColor = color;
}

// Set new message
function changed_message(color, time) {
	return color + " background @ " + time;
}

// Register listeners
function register_listeners(){
	document.getElementById('bg-button').addEventListener('click', get_time);
}

// Main call
register_listeners();