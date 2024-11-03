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

export { capitalize, reverseString };
