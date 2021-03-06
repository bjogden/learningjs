// Listen for click 
function wake_listeners() {
	document.getElementById('pet-btn').addEventListener('click', convert);
}

// Get input
function get_pet_input() {
	return document.getElementById('pet_input').value;
}

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
	var age_diff, result;

	if (dog_age >= 0 && dog_age <= 2) {
		age_diff = 12*dog_age;
		result = age_diff;
	} else if (dog_age > 2) {
		age_diff = (4*(dog_age-2))+24;
		result = age_diff;
	}
	return result;
}

// Convert cat's age
function convert_cat() {
	var cat_age = check_pet_input();
	var age_diff, result;

	if (cat_age >= 0 && cat_age <= 1) {
		age_diff = 15*cat_age;
		result = age_diff;
	} else if (cat_age > 1 && cat_age <= 2) {
		age_diff = (9*(cat_age-1))+15;
		result = age_diff;
	} else if (cat_age > 2) {
		age_diff = (4*(cat_age-2))+24;
		result = age_diff;
	}
	return result;
}

// Convert to human years
function convert_age() {
	var pet_age = check_pet_input();
	var pet_type = check_dropdown();
	var result;

	if (pet_type && pet_age) {
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
	} else if (!pet_type && !pet_age) {
		result = "Enter all info";
	} else if (!pet_type) {
		result = "Select pet";
	} else {
		result = "Enter pet age";
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

