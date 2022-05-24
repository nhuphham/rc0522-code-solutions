/* exported reverseWords */
function reverseWords(string) {
  return string.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
