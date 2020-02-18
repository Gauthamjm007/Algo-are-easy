export const changeSpeed = speed => {
  return({
    type: 'CHANGE_SPEED',
    payload: {speed}
  });
};