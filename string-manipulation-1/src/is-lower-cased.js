/* exported isLowerCased */
function isLowerCased(string) {
  for (let i = 0; i < string.length; i++) {
    if (string[i] !== string[i].toLowerCase()) return false;
  }
  return true;
}
