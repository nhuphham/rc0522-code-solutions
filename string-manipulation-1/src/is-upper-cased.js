/* exported isUpperCased */
function isUpperCased(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toUpperCase()) return false;
  }
  return true;
}
