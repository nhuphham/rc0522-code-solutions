/* exported chunk */
function chunk(array, size) {
  const result = [];
  let chunk = [];
  let counter = 0;
  if (array.length === 0) return result;
  for (let i = 0; i < array.length; i++) {
    if (counter === size) {
      result.push(chunk);
      chunk = [array[i]];
      counter = 1;
    } else {
      chunk.push(array[i]);
      counter++;
    }
  }
  if (chunk) result.push(chunk);
  return result;
}
