function *initialState(){
  yield null;
  return;
}

export const frames = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_FRAMES':
      return(state = action.payload.frames);
    default:
      return state;
  }
};