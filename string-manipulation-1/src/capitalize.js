/* exported capitalize */
function capitalize(string) {
  let result = string[0].toUpperCase();
  for (let i = 1; i < string.length; i++) {
    result += string[i].toLowerCase();
  }
  return result;
}
