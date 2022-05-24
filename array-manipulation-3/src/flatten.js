/* exported flatten */
function flatten(array) {
  const result = [];
  array.forEach(item => {
    if (Array.isArray(item)) {
      item.forEach(inner => result.push(inner));
    } else {
      result.push(item);
    }
  });
  return result;
}
