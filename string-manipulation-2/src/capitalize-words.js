/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.split(' ');
  const result = [];
  words.map(word => {
    return result.push(word[0].toUpperCase() + word.slice(1, word.length).toLowerCase());
  });
  return result.join(' ');
}
