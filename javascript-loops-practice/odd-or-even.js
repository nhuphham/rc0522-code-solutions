/* exported oddOrEven */
function oddOrEven(numbers) {
  const results = [];
  for (let i = 0; i < numbers.length; i++) {
    results.push(numbers[i] % 2 === 0 ? 'even' : 'odd');
  }
  return results;
}
