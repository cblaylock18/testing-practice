function capitalize(string) {
  return string.slice(0, 1).toUpperCase() + string.slice(1).toLowerCase();
}

function reverseString(string) {
  let reversedString = "";
  let workingString = string;

  while (workingString.length > 0) {
    const nextLetter = workingString.slice(-1);
    workingString = workingString.slice(0, workingString.length - 1);
    reversedString = reversedString.concat(nextLetter);
  }

  return reversedString;
}

const calculator = {
  add(x, y) {
    return x + y;
  },

  sub(x, y) {
    return x - y;
  },

  mult(x, y) {
    return x * y;
  },

  div(x, y) {
    return x / y;
  },
};

function caesarCipher(string, n) {
  const lowerCaseAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let newString = "";

  for (let i = 0; i < string.length; i++) {
    const nextCharacter = string.slice(i, i + 1);
    const indexOfLetter = lowerCaseAlphabet.indexOf(
      nextCharacter.toLowerCase(),
    );
    if (indexOfLetter === -1) {
      newString = newString.concat(nextCharacter);
    } else if (nextCharacter === nextCharacter.toUpperCase()) {
      newString = newString.concat(
        lowerCaseAlphabet[(indexOfLetter + n) % 26].toUpperCase(),
      );
    } else {
      newString = newString.concat(lowerCaseAlphabet[(indexOfLetter + n) % 26]);
    }
  }

  return newString;
}

function analyzeArray(array) {
  const average =
    array.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    array.length;

  function smallerNumber(x, y) {
    return x <= y ? x : y;
  }

  const min = array.reduce((accumulator, currentValue) => {
    return accumulator <= currentValue ? accumulator : currentValue;
  }, array[0]);

  const max = array.reduce((accumulator, currentValue) => {
    return accumulator >= currentValue ? accumulator : currentValue;
  }, array[0]);

  const length = array.length;

  return {
    average,
    min,
    max,
    length,
  };
}

export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
