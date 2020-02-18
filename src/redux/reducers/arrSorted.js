const initialState = [...Array(30).keys()].map(num => num+1).map(num => ({num, color: null}));
export const arrSorted = (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_ARRAY_SORTED':
      return (state = action.payload.arr);
    default:
      return state;
  }
};