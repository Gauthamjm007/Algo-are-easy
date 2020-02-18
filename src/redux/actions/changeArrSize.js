export const changeArrSize = arrSize => {
  return({
    type: 'CHANGE_ARR_SIZE',
    payload: {arrSize}
  });
};