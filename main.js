var reservations = {
  'Bob': { claimed: false },
  'Ted': { claimed: true }
}

var name = prompt('Please enter the name for your reservation');

var claimReservation = function () {
  if (reservations[name] != undefinded && reservations[name].claimed == true ) {
		alert("Welcome ", +name);
}
  else if (reservations[name] != undefinded && reservations[name].claimed == false ) {
  		alert("Your reservations have already been claimed");
  }
  else if (reservations[name] == undefinded) {
  		alert("there are no reservations under your name")

  }


  }	
}

claimReservation();