export const arrSize = (state = 30, action) => {
  switch(action.type){
    case('CHANGE_ARR_SIZE'):
      return (state = action.payload.arrSize);
    default:
      return state; 
  }
};