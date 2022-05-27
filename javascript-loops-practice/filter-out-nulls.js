/* exported filterOutNulls */
function filterOutNulls(values) {
  const results = [];
  for (let i = 0; i < values.length; i++) {
    values[i] !== null && results.push(values[i]);
  }
  return results;
}
