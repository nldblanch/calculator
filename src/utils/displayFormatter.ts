export const formatDisplay = (number: string): string => {
  if (number.includes(".")) return number
  const output = number
    .split("")
    .reverse()
    .map((digit, index) => {
      return index % 3 === 0 && index > 1 ? digit + "," : digit;
    });

  return output.reverse().join("");
};
