/* exported student */
const student = {
  firstName: 'Nhu',
  lastName: 'Pham',
  subject: 'Javascript',
  getFullName: function () {
    const name = this.firstName + ' ' + this.lastName;
    return name;
  },
  getIntroduction: function () {
    const intro = 'Hello, my name is' + ' ' + this.firstName + ' ' + this.lastName + ' ' + 'and I am studying' + ' ' + this.subject + '.';
    return intro;
  }
};
