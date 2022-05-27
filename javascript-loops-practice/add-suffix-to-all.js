/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const results = [];
  for (let i = 0; i < words.length; i++) {
    results.push(words[i] + suffix);
  }
  return results;
}
