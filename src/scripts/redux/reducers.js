import { combineReducers } from 'redux';
import starSystemsState from '../star-systems/reducers';

const rootReducer = combineReducers({
  starSystemsState
});

export default rootReducer;
