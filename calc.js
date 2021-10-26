// Binary To Decimal
var binInput = document.getElementById('binInput');
var decOutput = document.getElementById('decOutput');
var binToDecForm = document.getElementById('bin-to-dec-form');
binToDecForm.addEventListener('submit', convertBinToDec);


// Decimal to Binary
var decInput = document.getElementById('decInput');
var binOutput = document.getElementById('binOutput');
var decToBinForm = document.getElementById('dec-to-bin-form');
decToBinForm.addEventListener('submit', convertDecToBin);

function convertBinToDec(event) {
  // Validate Inputs
  if (!binInput.value) {
    alert("Please Enter a Binary Value");
  }
  else {
    var binVal = parseInt(binInput.value);
    var decResult = 0;

    // Convert binary to decimal
    for (let multiplier = 1; binVal > 0; multiplier *= 2) {
      let temp = parseInt(binVal % 2);
      decResult += (temp * multiplier);
      binVal = parseInt(binVal/10);
    }

    // Return value
    decOutput.value = decResult;
    event.preventDefault(); //Turn off page refresh
  }
}

function convertDecToBin(event) {
  // Validate Inputs
  if (!decInput.value) {
    alert("Please Enter a Decimal Value");
  }
  else {
    var decVal = parseInt(decInput.value);
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
    binOutput.value = binResult;
  }
  event.preventDefault();
}