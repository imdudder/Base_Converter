// Binary To Decimal
var binToDecInput = document.getElementById('binToDecInput');
var binToDecOutput = document.getElementById('binToDecOutput');
var binToDecForm = document.getElementById('bin-to-dec-form');
binToDecForm.addEventListener('submit', convertBinToDec);

// Decimal to Binary
var decToBinInput = document.getElementById('decToBinInput');
var decToBinOutput = document.getElementById('decToBinOutput');
var decToBinForm = document.getElementById('dec-to-bin-form');
decToBinForm.addEventListener('submit', convertDecToBin);


// Hexadecimal to Decimal
var hexToDecInput = document.getElementById('hexToDecInput');
var hexToDecOutput = document.getElementById('hexToDecOutput');
var hexToDecForm = document.getElementById('hex-to-dec-form');
hexToDecForm.addEventListener('submit', convertHexToDec);

// Decimal to Hexadecimal
var decToHexInput = document.getElementById('decToHexInput');
var decToHexOutput = document.getElementById('decToHexOutput');
var decToHexForm = document.getElementById('dec-to-hex-form');
decToHexForm.addEventListener('submit', convertDecToHex);


//===================== Binary to Decimal Section ====================
function convertBinToDec(event) {
  // Validate Inputs
  if (binToDecInput.value) {
    var binVal = parseInt(binToDecInput.value);
    var decResult = 0;

    // Convert binary to decimal
    for (let multiplier = 1; binVal > 0; multiplier *= 2) {
      let temp = parseInt(binVal % 2);
      decResult += (temp * multiplier);
      binVal = parseInt(binVal/10);
    }

    // Return value
    binToDecOutput.value = decResult;
    event.preventDefault(); //Turn off page refresh
  }
}


//===================== Decimal to Binary Section ====================
function convertDecToBin(event) {
  // Validate Inputs
  if (decToBinInput.value) {
    var decVal = parseInt(decToBinInput.value);
    var binResult = "";
    while (decVal > 0) {
      if (decVal % 2 == 0) {
        binResult = "0" + binResult;
      }
      else {
        binResult = "1" + binResult;
      }
      decVal = parseInt(decVal/2);
    }
    decToBinOutput.value = binResult;
  }
  event.preventDefault();
}


// ===================== Hex to Decimal Section ====================
function convertHexToDec(event) {
  // Validate Inputs
  if (hexToDecInput.value) {
    var hexVal = String(hexToDecInput.value);
    var decResult = 0;

    // Convert hex to decimal
    let multiplier = 1;
    for (let hexDigitIndex = hexVal.length - 1; hexDigitIndex >= 0; hexDigitIndex--) {
      let hexDigit = 0;
      if (hexVal[hexDigitIndex] >= '0' && hexVal[hexDigitIndex] <= '9') {
        hexDigit = parseInt(hexVal[hexDigitIndex]);
      }
      else if (hexVal[hexDigitIndex] >= 'A' && hexVal[hexDigitIndex] <= 'F') {
        hexDigit = hexVal.charCodeAt(hexDigitIndex) - 55;
      }
      else if (hexVal[hexDigitIndex] >= 'a' && hexVal[hexDigitIndex] <= 'f') {
        hexDigit = hexVal.charCodeAt(hexDigitIndex) - 87;
      }
      decResult += (hexDigit * multiplier);
      multiplier *= 16;
    }

    // Return value
    hexToDecOutput.value = decResult;
    event.preventDefault(); // Turn off page refresh
  }
}


// ===================== Decimal to Hex Section ====================
function convertDecToHex(event) {
  // Validate Inputs
  if (decToHexInput.value) {
    var decVal = parseInt(decToHexInput.value);
    var hexResult = "";
    while (decVal > 0) {
      let remainder = decVal % 16;
      switch(remainder) {
        case 10:
          hexResult = "A" + hexResult;
          break;
        case 11:
          hexResult = "B" + hexResult;
          break;
        case 12:
          hexResult = "C" + hexResult;
          break;
        case 13:
          hexResult = "D" + hexResult;
          break;
        case 14:
          hexResult = "E" + hexResult;
          break;
        case 15:
          hexResult = "F" + hexResult;
          break;
        default:
          hexResult = String(remainder) + hexResult;
      }
      decVal = parseInt(decVal / 16);
    }

    decToHexOutput.value = String(hexResult);
  }
  event.preventDefault();
}