// index.js
const calculate = (a, b, operator) => {
  // Convertir les arguments en nombres s'ils sont des chaînes de caractères
  if (typeof a === "string") a = parseFloat(a);
  if (typeof b === "string") b = parseFloat(b);

  let result;
  switch (operator) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "*":
      result = a * b;
      break;
    case "/":
      if (b === 0) {
        return "Division by zero is not allowed";
      }
      result = a / b;
      break;
    default:
      return "Invalid operator";
  }
  return result;
};

export default calculate;
