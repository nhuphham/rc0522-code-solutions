/* exported defaults */
function defaults(target, source) {
  Object.keys(source).forEach(key => {
    if (target[key] === undefined) target[key] = source[key];
  });
  return target;
}
