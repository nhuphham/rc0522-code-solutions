/* exported titleCase */
function titleCase(string) {
  const minor = ['and', 'or', 'nor', 'but', 'a', 'an', 'the', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'per', 'to'];
  const words = string.split(' ');
  let subtitle = false;
  return words.map((word, index) => {
    if (!minor.includes(word.toLowerCase())) {
      if (word.toLowerCase() === 'javascript') return 'JavaScript';
      if (word.toLowerCase() === 'javascript:') {
        subtitle = true;
        return 'JavaScript:';
      } else if (word.toLowerCase() === 'api') return 'API';

      if (word.charAt(word.length - 1) === ':') subtitle = true;

      if (word.includes('-')) {
        const hyphen = word.split('-');
        return hyphen[0].charAt(0).toUpperCase() + hyphen[0].slice(1).toLowerCase() + '-' + hyphen[1].charAt(0).toUpperCase() + hyphen[1].slice(1).toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    } else {
      if (subtitle || index === 0) {
        subtitle = false;
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      } else return word.toLowerCase();
    }
  }).join(' ');
}
