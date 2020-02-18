import { combineReducers } from 'redux';
import { algo } from './algo';
import { arrSize } from './arrSize';
import { arr } from './arr';
import { arrSorted } from './arrSorted';
import { speed } from './speed';
import { isSorting } from './isSorting';
import { frames } from './frames';

export const mainReducer = combineReducers({
  algo,
  arrSize,
  arr,
  arrSorted,
  speed,
  isSorting,
  frames
});