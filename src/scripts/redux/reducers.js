import { combineReducers } from 'redux';
//import defaultState from '../default/reducers';
import starSystemsState from '../star-systems/reducers';

const rootReducer = combineReducers({
  starSystemsState
});

export default rootReducer;
