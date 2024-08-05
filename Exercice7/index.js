function convertToBinary() {
  let decimalInput = document.getElementById("decimalInput").value.trim();
  let decimalNumber = parseInt(decimalInput, 10);

  if (isNaN(decimalNumber) || decimalNumber < 0) {
    document.getElementById("binaryResult").textContent = "";
    return;
  }

  let binaryResult = "";
  let quotient = decimalNumber;

  while (quotient > 0) {
    let remainder = quotient % 2;
    binaryResult = remainder + binaryResult;
    quotient = Math.floor(quotient / 2);
  }

  if (binaryResult === "") {
    binaryResult = "0";
  }

  document.getElementById(
    "binaryResult"
  ).textContent = `Résultat binaire: ${binaryResult}`;
}
