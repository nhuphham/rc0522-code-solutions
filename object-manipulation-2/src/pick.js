/* exported pick */
function pick(source, keys) {
  const result = {};
  keys.forEach(key => {
    if (source[key] !== undefined) result[key] = source[key];
  });
  return result;
}
