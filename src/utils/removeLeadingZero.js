export const removeLeadingZero = (floatNumber) => {
  const floatString = floatNumber.toString();

  if (floatString.startsWith("0.")) {
    return floatString.substring(1);
  }

  return floatString;
};
