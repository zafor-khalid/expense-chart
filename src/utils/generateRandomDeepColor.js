export const generateRandomDeepColor = () => {
  // Generate random RGB values
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  // Convert RGB values to hexadecimal
  const hex = ((red << 16) | (green << 8) | blue).toString(16);

  // Pad the hexadecimal code with zeroes if necessary
  const paddedHex = hex.padStart(6, "0");

  return `#${paddedHex}`;
};
