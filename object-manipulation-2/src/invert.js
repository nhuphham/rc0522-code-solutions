/* exported invert */
function invert(source) {
  const result = {};
  Object.keys(source).forEach(key => {
    result[source[key]] = key;
  });
  return result;
}
