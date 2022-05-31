var books = [
  {
    isbn: '978-0-06-2457714',
    title: 'Subtle art',
    author: 'Mark Manson'
  },
  {
    isbn: '978-2-06-2425198',
    title: 'Milk And honey',
    author: 'Rupi Kaur'
  },
  {
    isbn: '978-5-06-2450212',
    title: 'DARE',
    author: 'Manning Jobs'
  }
];

console.log('books:', books);
console.log('typeof books:', typeof books);

var booksJSON = JSON.stringify(books);
console.log('booksJSON:', booksJSON);
console.log('typeof booksJSON', typeof books);

var studentJSON = '{"id":25, "name": "Nhu Pham"}';
console.log('studentJSON:', studentJSON);
console.log('typeof student JSON:', typeof studentJSON);

var student = JSON.parse(studentJSON);
console.log('student:', student);
console.log('typeof student:', typeof student);
