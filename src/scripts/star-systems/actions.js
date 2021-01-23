import { createActions } from 'redux-actions';

const types = {
  UPDATE_ITEM: 'UPDATE_ITEM',
  SET_STAR_SYSTEMS:'SET_STAR_SYSTEMS',
  GET_STAR_SYSTEMS:'GET_STAR_SYSTEMS',
  SET_SYSTEM_PLANETS:'SET_SYSTEM_PLANETS',
  GET_SYSTEM_PLANETS:'GET_SYSTEM_PLANETS',
  SET_STAR_ALT_NAMES:'SET_STAR_ALT_NAMES',
  GET_STAR_ALT_NAMES:'GET_STAR_ALT_NAMES',
  SET_CHOSEN_SYSTEM:'SET_CHOSEN_SYSTEM'
};

const actions = createActions(...Object.keys(types).map(type => types[type]));

export default actions;
export { types };


