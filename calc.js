// Binary To Decimal Listener
var binToDecForm = document.getElementById('bin-to-dec-form');
binToDecForm.addEventListener('submit', binToDecHandler);

// Decimal to Binary Listener
var decToBinForm = document.getElementById('dec-to-bin-form');
decToBinForm.addEventListener('submit', decToBinHandler);

// Hexadecimal to Decimal Listener
var hexToDecForm = document.getElementById('hex-to-dec-form');
hexToDecForm.addEventListener('submit', hexToDecHandler);

// Decimal to Hexadecimal Listener
var decToHexForm = document.getElementById('dec-to-hex-form');
decToHexForm.addEventListener('submit', decToHexHandler);


//===================== Binary to Decimal Section ====================
function binToDecHandler(event) {
	var binToDecInput = document.getElementById('binToDecInput');
	var binToDecOutput = document.getElementById('binToDecOutput');
  if (binToDecInput.value) {
		binToDecOutput.value = binaryToDecimal(parseInt(binToDecInput.value));
  }
	event.preventDefault();
}

function binaryToDecimal(binVal) {
	var decVal = 0;
	for (let multiplier = 1; binVal > 0; multiplier *= 2) {
		let remainder = parseInt(binVal % 2);
		decVal += (remainder * multiplier);
		binVal = parseInt(binVal / 10);
	}
	return decVal;
}


//===================== Decimal to Binary Section ====================
function decToBinHandler(event) {
	var decToBinInput = document.getElementById('decToBinInput');
	var decToBinOutput = document.getElementById('decToBinOutput');
  if (decToBinInput.value) {
		decToBinOutput.value = decimalToBinary(parseInt(decToBinInput.value));
  }
  event.preventDefault();
}

function decimalToBinary(decVal) {
	var binVal = "";
	while (decVal > 0) {
		binVal = (decVal % 2 == 0) ? "0" + binVal : "1" + binVal;
		decVal = parseInt(decVal/2);
	}
	return binVal;
}


// ===================== Hex to Decimal Section ====================
function hexToDecHandler(event) {
	var hexToDecInput = document.getElementById('hexToDecInput');
	var hexToDecOutput = document.getElementById('hexToDecOutput');
  if (hexToDecInput.value) {
		hexToDecOutput.value = hexToDecimal(String(hexToDecInput.value));
  }
	event.preventDefault(); // Turn off page refresh
}

function hexToDecimal(hexVal) {
	let multiplier = 1;
	let decVal = 0;
	for (let hexIndex = hexVal.length - 1; hexIndex >= 0; hexIndex--) {
		let hexDigit = 0;
		if (hexVal[hexIndex] >= '0' && hexVal[hexIndex] <= '9') {
			hexDigit = parseInt(hexVal[hexIndex]);
		}
		else if (hexVal[hexIndex] >= 'A' && hexVal[hexIndex] <= 'F') {
			hexDigit = hexVal.charCodeAt(hexIndex) - 55;
		}
		else if (hexVal[hexIndex] >= 'a' && hexVal[hexIndex] <= 'f') {
			hexDigit = hexVal.charCodeAt(hexIndex) - 87;
		}
		decVal += (hexDigit * multiplier);
		multiplier *= 16;
	}
	return decVal;
}


// ===================== Decimal to Hex Section ====================
function decToHexHandler(event) {
	var decToHexInput = document.getElementById('decToHexInput');
	var decToHexOutput = document.getElementById('decToHexOutput');
  if (decToHexInput.value) {
		decToHexOutput.value = decimalToHex(parseInt(decToHexInput.value));
  }
  event.preventDefault();
}

function decimalToHex(decVal) {
	var hexVal = "";
	while (decVal > 0) {
		let remainder = decVal % 16;
		switch(remainder) {
			case 10:
				hexVal = "A" + hexVal;
				break;
			case 11:
				hexVal = "B" + hexVal;
				break;
			case 12:
				hexVal = "C" + hexVal;
				break;
			case 13:
				hexVal = "D" + hexVal;
				break;
			case 14:
				hexVal = "E" + hexVal;
				break;
			case 15:
				hexVal = "F" + hexVal;
				break;
			default:
				hexVal = String(remainder) + hexVal;
		}
		decVal = parseInt(decVal / 16);
	}
	return hexVal;
}