/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    return false;
  } else {
    return true;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.startsWith('J')) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  if (person >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person) {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' && 'wakko') {
    return 'We\'re the warners brothers!';
  } else if (name === 'dot') {
    return 'I\'m cute';
  } else {
    return 'Goodnight everybody!';
  }
}
