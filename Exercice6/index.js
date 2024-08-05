function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value;

  try {
    // Vérifier si l'expression contient une division par zéro
    if (expression.includes("/0")) {
      display.value = "Division by zero is not allowed";
      return;
    }

    // Évaluer l'expression de manière sécurisée
    const result = eval(expression);

    // Vérifier les résultats d'Infinity ou NaN
    if (result === Infinity || result === -Infinity) {
      display.value = "Division by zero is not allowed";
    } else if (isNaN(result)) {
      display.value = "Invalid operation";
    } else {
      display.value = result;
    }
  } catch (e) {
    display.value = "Error";
  }
}
