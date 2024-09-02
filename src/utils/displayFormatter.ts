export const formatDisplay = (number: string): string => {
  const output = number
    .split("")
    .reverse()
    .map((digit, index) => {
      return index % 3 === 0 && index > 1 ? digit + "," : digit;
    });

  return output.reverse().join("");
};
