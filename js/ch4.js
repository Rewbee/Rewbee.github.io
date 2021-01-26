var table = 50; // Unit of table
var operator = 'addition'; // Type of calculation
var i = 1; // Set counter to 1
var msg = ''; // Message
var camvasNames = ['Filler', 'Extra Small', 'Small', 'Medium', 'Normal', 'Large', 'Extra Large', 'Wall Mural'];

if (operator === 'addition') {
	// Do addition
	while (i < 8) {
		msg += camvasNames[i] + ' Price: ' + '$' + (i+table) + '<br />';
		i++;
		table++;
	}
} else {
	// Do multiplication
	while (i < 8) {
		msg += camvasNames[i] + ' Price: ' + '$' + (i*table) + '<br />';
		i++;
		table++;
	}
}


// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;
