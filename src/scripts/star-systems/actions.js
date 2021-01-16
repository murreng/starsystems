import { createActions } from 'redux-actions';

const types = {
  UPDATE_ITEM: 'UPDATE_ITEM',
  SET_STAR_SYSTEMS:'SET_STAR_SYSTEMS',
  GET_STAR_SYSTEMS:'GET_STAR_SYSTEMS'
};

const actions = createActions(...Object.keys(types).map(type => types[type]));

export default actions;
export { types };


