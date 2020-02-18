const initialState = [...Array(30).keys()].map(num => num+1).map(num => ({num, color: null}));
export const arr = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY':
      return (state = action.payload.arr);
    default:
      return state;
  }
};