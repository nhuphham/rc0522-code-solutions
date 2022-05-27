/* exported getStudentNames */
function getStudentNames(students) {
  const results = [];
  for (let i = 0; i < students.length; i++) {
    results.push(students[i].name);
  }
  return results;
}
