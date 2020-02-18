export const changeArrSorted = arr => {
  return({
    type: 'CHANGE_ARRAY_SORTED',
    payload: {arr}
  });
};