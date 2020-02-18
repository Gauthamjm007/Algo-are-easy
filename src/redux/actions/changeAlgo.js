export const changeAlgo = algo => {
  return({
    type: 'CHANGE_ALGO',
    payload: {algo}
  });
};