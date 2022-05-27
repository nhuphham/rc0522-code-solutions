/* exported isAnagram */
function isAnagram(firstString, secondString) {
  const x = firstString.replace(' ', '').split('').sort().join('').trim();
  const y = secondString.replace(' ', '').split('').sort().join('').trim();
  return x.length === y.length && x === y;
}
