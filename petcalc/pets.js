// Listen for click 
function wake_listeners() {
	document.getElementById('pet-btn').addEventListener('click', convert);
	/*document.getElementById('pet_input').addEventListener(KeyboardEvent.KEY_DOWN, keyDownHandler);
	function keyDownHandler(event : KeyboardEvent) : void {
    if (event.keyCode == Keyboard.ENTER) {
        alert("hi");
    };
}*/
}

// Get input
function get_pet_input() {
	return document.getElementById('pet_input').value;
}

/* Check for whole number
may or may not be useful
function is_int(x) {
	return n % 1 === 0;
}
*/

// Check if input is number
function check_pet_input() {
	var pet_user_input = get_pet_input();

	if (isNaN(pet_user_input) || (pet_user_input <= 0)) {
		return false;
	} else {
		return pet_user_input;
	}
}

// Check dropdown
function check_dropdown() {
	return document.getElementById('pet_dropdown').value;
}

// Convert dog's age
function convert_dog() {
	var dog_age = check_pet_input();
	var age_diff;

	if (dog_age == 0) {
		return 0;
	} else if (dog_age == 1) {
		return 12;
	} else if (dog_age == 2) {
		return 24;
	} else if (dog_age > 2) {
		age_diff = dog_age - 2;
		age_diff *= 4;
		return (24 + age_diff);
	}
}

// Convert cat's age
function convert_cat() {
	var cat_age = check_pet_input();
	var age_diff, result;

	if (cat_age == 0) {
		result = 0;
	} else if (cat_age == 1) {
		result = 15;
	} else if (cat_age == 2) {
		result = 24;
	} else if (cat_age > 2) {
		age_diff = cat_age - 2;
		age_diff *= 4;
		result = (24 + age_diff);
	}
	return result;
}

// Convert to human years
function convert_age() {
	var pet_age = check_pet_input();
	var pet_type = check_dropdown();
	var result;

	if (pet_age) {
		if (pet_type == "dog") {
			result = convert_dog();
		}
		else if (pet_type == "cat") {
			result = convert_cat();
		}
	} else {
		result = "Enter positive integer";
	}
	return result;
}

// Update output
function update_result(age) {
	document.getElementById('pet_age').value = age;
}

// Callback for convert function
function convert() {
	var pet_input = check_pet_input();
	var pet_selection = check_dropdown();
	var human_age = convert_age();
	update_result(human_age);
}

// Kick it off
wake_listeners();

