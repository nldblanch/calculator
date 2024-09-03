export const formatDisplay = (number: string): string => {
  if (number.includes(".")) {
    const output = number.split(".");
    return commaFormat(output[0]) + "." + output[1]
  } else {
    return commaFormat(number)
  }
};

export const commaFormat = (number: string): string => {
  const output = number
    .split("")
    .reverse()
    .map((digit, index) => {
      return index % 3 === 0 && index > 1 ? digit + "," : digit;
    });
    return output.reverse().join("")
};
