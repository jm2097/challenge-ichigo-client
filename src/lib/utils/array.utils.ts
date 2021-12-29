const shuffle = (array: Array<any>): Array<any> => {
  const cloneArray = JSON.parse(JSON.stringify(array));
  return cloneArray.sort(() => Math.random() - 0.5);
};

export const ArrayUtils = { shuffle };
