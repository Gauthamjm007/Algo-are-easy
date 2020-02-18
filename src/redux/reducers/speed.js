export const speed = (state = 740, action) => {
  switch(action.type){
    case 'CHANGE_SPEED':
      return (state = action.payload.speed);
    default: 
      return state;
  }
};