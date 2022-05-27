/* exported zip */
function zip(first, second) {
  const length = first.length < second.length ? first.length : second.length;
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push([first[i], second[i]]);
  }
  return result;
}
