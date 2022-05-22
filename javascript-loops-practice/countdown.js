/* exported countdown */
function countdown(number) {
  const results = [];
  for (let i = number; i >= 0; i--) {
    results.push(i);
  }
  return results;
}
