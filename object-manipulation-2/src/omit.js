/* exported omit */
function omit(source, keys) {
  const result = Object.assign({}, source);
  keys.forEach(key => {
    delete result[key];
  });
  return result;
}
