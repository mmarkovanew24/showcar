export const calculateImageWidth = (idx, arrayLength) => {
  const maxImgWidth = 320;

  if (arrayLength === 2) {
    return maxImgWidth / 1.5;
  }

  if (idx === 0) {
    return maxImgWidth;
  }

  return maxImgWidth / (arrayLength - 1);
};
