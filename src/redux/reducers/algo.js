export const algo = (state = 0, action) => {
  switch(action.type){
    case 'CHANGE_ALGO':
      return (state = action.payload.algo);
    default:
      return state;
  }
};