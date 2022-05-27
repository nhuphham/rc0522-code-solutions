/* exported difference */
function difference(first, second) {
  const firstFiltered = first.filter(x => !second.includes(x));
  const secondFiltered = second.filter(x => !first.includes(x));
  return firstFiltered.concat(secondFiltered);
}
