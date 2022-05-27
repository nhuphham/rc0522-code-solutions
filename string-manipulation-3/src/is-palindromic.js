/* exported isPalindromic */
function isPalindromic(string) {
  return string.replace(' ', '') === [...string.replace(' ', '')].reverse().join('');
}
