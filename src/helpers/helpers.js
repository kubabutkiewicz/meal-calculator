export const checkIfNan = num => {
  if (isNaN(num)) {
    num = 0;
  } else {
    num = Math.round(num * 100) / 100;
  }
  return num;
};
