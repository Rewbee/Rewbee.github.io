var today = new Date();
var hourNow = today.getHours();
var greeting;
//Display the appropriate greeting based on the current time
if (hourNow > 18) {
	greeting = 'Good Evening';
 } else if (hourNow > 12) {
	greeting = 'Good Afternoon';
	} else if (hourNow > 0) {
		greeting = 'Good Morning';
	} else {
		greeting = 'Welcome';
	}
document.write(greeting);
//Create variables to hold details about the sign
var sign = "Art";
var tiles = sign.length;
var shipping = 7;
var grandTotal = sub total + shipping;

//Get the element that has an id of greeting
var el = document.getElementById("greeting");
//Relplace the content of that element with the personalized welcome message
el.textContent = welcome;

//Get the element that has an id of userSign then update its contents
var elSign = document.getElementById("userSign");
elSign.textContent = sign;

//Get the element that has an id of tiles then update its contents
var elTiles = document.getElementById("tiles")
el.textContent = tiles;

//Get the element that has an id of subTotal then update its contents
var elSubtotal = document.getElementById("subTotal")
el.textContent = subTotal;

//Get the element that has an id of shipping then update its contents
var elSubtotal = document.getElementById("shipping");
elSubtotal.textcontent = "$" + shipping;

//Get the element that has an id of grandTotal then update its contents
var elGrandTotal = document.getElementById("grandTotal";)
elGrandTotal.textcontent = "$" + grandTotal;