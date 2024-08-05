const button = document.getElementById("myButton");
const messageParagraph = document.getElementById("message");

button.addEventListener("click", function () {
  messageParagraph.textContent = "Bonjour, vous avez cliqué sur le bouton !";
});
