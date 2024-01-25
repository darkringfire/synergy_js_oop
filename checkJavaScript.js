function checkForJavaScript(str) {
  // Игнорируем регистр букв при поиске слова "javascript"
  var regex = /javascript/i;
  return regex.test(str);
}

module.exports = checkForJavaScript;
